function applySliders() {
    $(".preview").slick({
        dots: true,
        arrows: false
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function setTheme() {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkTheme) {
        $("body").addClass("theme--dark");
    } else {
        $("body").removeClass("theme--dark");
    }
}

function initVue() {
    const app = new Vue({
        el: "#app",
        mounted() {
            this.darkTheme = $("body").hasClass("theme--dark");
    
            applySliders();
    
            $(window).click(function(event) {            
                var $target = $(event.target);
                if(!$target.closest('.email-tooltip').length && $target[0] !== $(".email-tooltip__button")[0] && $('.email-tooltip').hasClass("email-tooltip--open")) {
                    $('.email-tooltip').removeClass("email-tooltip--open");
                }
            });
        },
        methods: {
            copyEmail(event) {
                const b = event.target.closest(".email-tooltip");
                $(b).addClass("email-tooltip--ok");
                setTimeout(function() {
                    $(b).removeClass("email-tooltip--ok");
                }, 500);
                copyToClipboard("eug.bondarev@gmail.com")
            },
            contact() {
                $(".email-tooltip").toggleClass("email-tooltip--open");
            },
            switchMode(mode, e) {
                if (this.state != mode) {
                    $(".menu--selected").removeClass("menu--selected");
                    $(e.target).addClass("menu--selected");
                    this.state = mode;
                    if (this.state == "projects") {
                        setTimeout(function() {
                            applySliders();
                        }, 10);
                    }
                }
            },
            toggleTheme() {
                $("body").toggleClass("theme--dark");
                this.darkTheme = !this.darkTheme;
            },
        },
        data: ({
            state: "projects",
            darkTheme: false,
            projects: [
                {
                    title: "Besondere Lernleistung im Fach Informatik (Abitur 2022)",
                    links: [
                        {
                            cls: "fa-solid fa-file-lines",
                            href: "materials/BLL_Eugen_Bondarev.pdf"
                        },
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/BLL"
                        }
                    ],
                    gallery: [
                        "images/projects/bll_1.png",
                        "images/projects/bll_0.png",
                        "images/projects/bll_2.png",
                    ],
                    techStack: ["C++", "vcpkg", "CMake", "AI", "eigen", "OpenGL", "ImGui"],
                    description: `
                        Meine besondere Lernleistung im Rahmen des Abiturs 2022, die sich mit dem Thema beschäftigt „Modellierung und Implementierung künstlicher
                        neuronaler Netze am Beispiel von Erkennung handgeschriebener Ziffern mit Hilfe von C++“.
                        <br>
                        <br>
                        Hier habe ich ein neuronales Netzwerk auf C++ implementiert, es mit dem MNIST-Datensatz trainiert und seine Leistung mit der Leistung von 
                        <a href="http://neuralnetworksanddeeplearning.com/chap1.html">Michael Nielsens Netzwerk</a>
                         verglichen.
                    `
                },
                {
                    title: "Snake KI, basierend auf den genetischen Algorithmen",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/SnakeAI"
                        }
                    ],
                    gallery: [
                        "images/projects/SnakeAI_1.mp4",
                        "images/projects/SnakeAI_2.mp4",
                        "images/projects/SnakeAI_0.png",
                    ],
                    techStack: ["C++", "CMake", "AI", "OpenGL", "ImGui"],
                    description: `
                        Ein Programm, dass sehr viele Snake-Spiele simuliert, die sich anfangs zufällig verhalten, fangen aber allmählich an, intelligentes Verhalten aufzuweisen.
                        Es werden hierbei die genetischen Algorithmen benutzt, mit deren Hilfe folgende Prozesse stattfinden:
                        <ul>
                            <li>Die besten Genome werden ausgewählt.</li>
                            <li>Diese produzieren Nachkommen miteinander.</li>
                            <ul>
                                <li>Die „Kinder“ übernehmen dabei einige Gene von den beiden Elternteilen.</li>
                                <li>Es können zufällige Mutationen auftreten.</li>
                            </ul>
                        </ul>
                    `
                },
                {
                    title: "Eine App fürs Teilen von Dateien innerhalb eines WLAN-Netzes",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/homeNetShare"
                        }
                    ],
                    gallery: [
                        "images/projects/homeNetShare_0.png",
                        "images/projects/homeNetShare_1.png"
                    ],
                    techStack: ["Java", "Maven", "OpenGL", "ImGui"],
                    description: `
                        Dieses Programm stellt eine Client/Server-Verbindung her, um mit deren Hilfe Dateien mittels WLAN zu übertragen.
                    `
                },                
                {
                    title: "Rechner von sehr großen Zahlen",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/real-long"
                        }
                    ],
                    gallery: [
                        "images/projects/real-long_0.png",
                        "images/projects/real-long_1.png"
                    ],
                    techStack: ["C++", "CMake"],
                    description: `
                        Dieses Programm ist durch dieses <a href="https://youtu.be/ujHHlJzcadE">Mathe-Video</a> inspiriert, das sich mit der Frage auseinandersetzt, was größer ist, 55^99 oder 99!
                        <br>
                        Da die Rechnung von solch großen Zahlen in den berühmten Programmiersprachen nicht out of the box implementiert ist, habe ich mich dafür entschieden, diesen Rechner in C++ zu programmieren.
                        <br>
                        Er ist in der Lage, die mathematischen Operatoren +, -, *, /, pow und factorial auf Zahlen beliebiger Größe anzuwenden.
                    `
                },
                {
                    title: "Leistungsstarker 2D-Renderer, mit Vulkan implementiert",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/VulkanMapRenderer"
                        }
                    ],
                    gallery: [
                        "images/projects/MapRenderer_0.png",
                        "images/projects/MapRenderer_1.png"
                    ],
                    techStack: ["C++", "CMake", "Vulkan", "ImGui"],
                    description: `
                        Dieser Renderer utilisiert das sogenannte Instanced-Rendering. 
                        <br>
                        Es werden gleichzeitig ungefähr 9000 Blocks gerendert, was beim „normalen“ Rendern aufgrund der vielen Funktionsaufrufe des Grafik-API (in dem Falle Vulkan) äußerst leistungsschwach wäre.
                    `
                },
                {
                    title: "Ein kleines Sandbox-Spiel, mit OpenGL implementiert",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/NaturaForge"
                        }
                    ],
                    gallery: [
                        "images/projects/OpenGLGame_0.png",
                        "images/projects/OpenGLGame_1.png"
                    ],
                    techStack: ["C++", "CMake", "OpenGL", "ImGui"],
                    description: `
                        Für dieses kleine Spiel habe ich von OpenGL bentzt. Das Spiel utilisiert Instanced-Rendering, um die riesige Karte zu rendern.
                        <br>
                        Die Grafik und Machaniken ähneln sich Terraria.
                        <br>
                        Die Karte ist allerdings unendlich, dafür benutzte ich Perlin-Noise (wie in Minecraft).
                        `
                },
                {
                    title: "Ein einfacher 3D-Renderer und 3D-Animation (Rigging)",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/anima"
                        }
                    ],
                    gallery: [
                        "images/projects/anima_0.mp4"
                    ],
                    videos: [
                    ],
                    techStack: ["C++", "CMake", "OpenGL", "assimp", "ImGui"],
                    description: `Ein Programm, das Modellen und Animationen aus .fbx-Dateien lädt und rendert. 
                    <br>
                    Das Rendering ist mit OpenGL implementiert.`
                }
            ]
        }),
    });
}


$(document).ready(function() {
    setTheme();
    $("body").removeClass("hide");
    initVue();
});