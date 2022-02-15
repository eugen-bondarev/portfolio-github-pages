$(document).ready(function() {
    $(".preview").slick({
        dots: true,
        arrows: false
    });
});

const app = new Vue({
    el: "#app",
    data: () => {
        return {
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
                    techStack: ["C++", "vcpkg", "CMake", "eigen", "OpenGL", "ImGui"],
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis velit soluta rem, facere recusandae deserunt excepturi praesentium facilis. Saepe non accusamus adipisci hic voluptatem veniam, animi id minus qui in."
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
                    techStack: ["Java", "maven", "OpenGL", "ImGui"],
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis velit soluta rem, facere recusandae deserunt excepturi praesentium facilis. Saepe non accusamus adipisci hic voluptatem veniam, animi id minus qui in."
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
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis velit soluta rem, facere recusandae deserunt excepturi praesentium facilis. Saepe non accusamus adipisci hic voluptatem veniam, animi id minus qui in."
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
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis velit soluta rem, facere recusandae deserunt excepturi praesentium facilis. Saepe non accusamus adipisci hic voluptatem veniam, animi id minus qui in."
                },
                {
                    title: "Ein kleines Sandbox-Spiel, mit OpenGL implementiert",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/VulkanMapRenderer"
                        }
                    ],
                    gallery: [
                        "images/projects/OpenGLGame_0.png",
                        "images/projects/OpenGLGame_1.png"
                    ],
                    techStack: ["C++", "CMake", "OpenGL", "ImGui"],
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis velit soluta rem, facere recusandae deserunt excepturi praesentium facilis. Saepe non accusamus adipisci hic voluptatem veniam, animi id minus qui in."
                },
                {
                    title: "Ein einfacher 3D-Renderer und 3D-Animation (Rigging)",
                    links: [
                        {
                            cls: "fa-brands fa-github",
                            href: "https://github.com/eugen-bondarev/VulkanMapRenderer"
                        }
                    ],
                    gallery: [
                        "images/projects/anima_0.mp4"
                    ],
                    videos: [
                    ],
                    techStack: ["C++", "CMake", "OpenGL", "ImGui"],
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis velit soluta rem, facere recusandae deserunt excepturi praesentium facilis. Saepe non accusamus adipisci hic voluptatem veniam, animi id minus qui in."
                }
            ]
        };
    }
});