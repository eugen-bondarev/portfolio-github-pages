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
                    techStack: ["C++", "vcpkg", "CMake", "eigen", "OpenGL", "ImGui"]
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
                    techStack: ["Java", "maven", "OpenGL", "ImGui"]
                }
            ]
        };
    }
});