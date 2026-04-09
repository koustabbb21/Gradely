import re

def extract_body_content(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We want everything between <!-- TopNavBar --> and the end of </main> or </div> before mobile nav
    # For welcome, start from <div class="flex pt-16 min-h-screen"> to </main>\n</div>
    # For CGPA, start from <main... to </main>
    # For SGPA, start from <main... to </main>

    match_welcome = re.search(r'<div class="flex pt-16 min-h-screen">.*?</main>\n</div>', content, re.DOTALL)
    if 'welcome' in filepath and match_welcome:
        return match_welcome.group(0)

    match_main = re.search(r'<main.*?</main>', content, re.DOTALL)
    if match_main:
        return match_main.group(0)
        
    return ""

welcome_src = "stitch/welcome_to_gradecalc/code.html"
cgpa_src = "stitch/cgpa_calculator_updated_style/code.html"
sgpa_src = "stitch/sgpa_calculator_inline_results/code.html"

welcome_html = extract_body_content(welcome_src)
cgpa_html = extract_body_content(cgpa_src)
sgpa_html = extract_body_content(sgpa_src)

template = f"""<!DOCTYPE html>
<html class="light" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>GradeCalc</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="style.css">
    <script id="tailwind-config">
      tailwind.config = {{
        darkMode: "class",
        theme: {{
          extend: {{
            "colors": {{
                    "on-surface-variant": "#48454f",
                    "surface-container-high": "#efe7dd",
                    "surface-container": "#f5ede3",
                    "surface-variant": "#e9e1d7",
                    "outline-variant": "#cac4d0",
                    "secondary": "#466368",
                    "tertiary-fixed": "#f1dbff",
                    "surface-container-highest": "#e9e1d7",
                    "surface-bright": "#fff8f2",
                    "tertiary-container": "#a48eb5",
                    "on-tertiary-fixed": "#241433",
                    "on-tertiary": "#ffffff",
                    "on-secondary-container": "#4a676d",
                    "on-error": "#ffffff",
                    "on-primary-fixed-variant": "#4a3f72",
                    "surface": "#fff8f2",
                    "surface-container-low": "#fbf2e8",
                    "on-secondary-fixed-variant": "#2e4b50",
                    "on-background": "#1e1b15",
                    "error-container": "#ffdad6",
                    "on-primary-container": "#322658",
                    "on-secondary": "#ffffff",
                    "on-tertiary-container": "#392748",
                    "on-primary-fixed": "#1e1244",
                    "inverse-surface": "#343029",
                    "primary-container": "#9b8ec7",
                    "secondary-fixed": "#c9e8ee",
                    "tertiary-fixed-dim": "#d6bee7",
                    "error": "#ba1a1a",
                    "primary-fixed-dim": "#ccbefa",
                    "surface-tint": "#62578c",
                    "secondary-container": "#c6e5eb",
                    "inverse-primary": "#ccbefa",
                    "surface-container-lowest": "#ffffff",
                    "on-error-container": "#93000a",
                    "on-tertiary-fixed-variant": "#523f61",
                    "secondary-fixed-dim": "#adccd2",
                    "on-secondary-fixed": "#001f24",
                    "on-primary": "#ffffff",
                    "outline": "#797580",
                    "inverse-on-surface": "#f8f0e5",
                    "tertiary": "#6a577a",
                    "primary-fixed": "#e7deff",
                    "background": "#fff8f2",
                    "surface-dim": "#e1d9cf",
                    "on-surface": "#1e1b15",
                    "primary": "#62578c"
            }},
            "borderRadius": {{
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            }},
            "fontFamily": {{
                    "headline": ["Inter"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }}
          }},
        }},
      }}
    </script>
</head>
<body class="bg-surface text-on-surface font-body min-h-screen selection:bg-primary-container/30">
    <nav class="fixed top-0 left-0 w-full z-[80] bg-[#F2EAE0]/70 backdrop-blur-xl transition-all duration-400">
        <div class="flex justify-between items-center px-[10%] py-6 w-full max-w-7xl mx-auto">
            <div class="text-2xl font-bold tracking-[-0.02em] text-[#1E1B15] cursor-pointer" onclick="navigate('welcome')">GradeCalc</div>
            <div class="hidden md:flex items-center space-x-12">
                <button onclick="navigate('welcome')" id="nav-welcome" class="nav-link text-[#62578C] border-b-2 border-[#62578C] pb-1 font-semibold transition-colors duration-400">Welcome</button>
                <button onclick="navigate('cgpa')" id="nav-cgpa" class="nav-link text-[#1E1B15]/60 font-medium hover:text-[#62578C] transition-colors duration-400">CGPA</button>
                <button onclick="navigate('sgpa')" id="nav-sgpa" class="nav-link text-[#1E1B15]/60 font-medium hover:text-[#62578C] transition-colors duration-400">SGPA</button>
            </div>
            <div class="flex items-center space-x-4">
                <button class="p-2 rounded-full hover:bg-surface-container transition-colors">
                    <span class="material-symbols-outlined text-on-surface">settings</span>
                </button>
            </div>
        </div>
    </nav>

    <div id="screen-welcome" class="screen-container block">
        {welcome_html}
    </div>

    <div id="screen-cgpa" class="screen-container hidden">
        {cgpa_html}
    </div>

    <div id="screen-sgpa" class="screen-container hidden">
        {sgpa_html}
    </div>

    <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#F2EAE0]/70 backdrop-blur-xl rounded-t-[1.5rem] shadow-xl shadow-[#1E1B15]/4">
        <button onclick="navigate('welcome')" id="mob-welcome" class="mob-link flex flex-col items-center justify-center text-[#62578C] bg-[#9B8EC7]/20 rounded-2xl px-6 py-2">
            <span class="material-symbols-outlined mb-1">home</span>
            <span class="font-label text-[10px] uppercase tracking-[0.05em]">Home</span>
        </button>
        <button onclick="navigate('cgpa')" id="mob-cgpa" class="mob-link flex flex-col items-center justify-center text-[#1E1B15]/50 px-6 py-2">
            <span class="material-symbols-outlined mb-1">calculate</span>
            <span class="font-label text-[10px] uppercase tracking-[0.05em]">CGPA</span>
        </button>
        <button onclick="navigate('sgpa')" id="mob-sgpa" class="mob-link flex flex-col items-center justify-center text-[#1E1B15]/50 px-6 py-2">
            <span class="material-symbols-outlined mb-1">analytics</span>
            <span class="font-label text-[10px] uppercase tracking-[0.05em]">SGPA</span>
        </button>
    </nav>

    <script src="app.js"></script>
</body>
</html>
"""

with open('index.html', 'w') as f:
    f.write(template)
print("Finished merging HTML.")
