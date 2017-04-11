"use strict"

var pageObj = (function () {
    var pagesObj = {

        showMainPage: function () {
            myFunctions.baseForPage("main", "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-1", "<p>Добро пожаловать в мир сказок</p>");
            myFunctions.twoButtonsPage('col-md-6 btn1', 'btn btn-primary btn-lg btn-block watch',
                '<i class="fa fa-music" aria-hidden="true"></i> Слушай и смотри <i class="fa fa-film" aria-hidden="true"></i>',
                pagesObj.chooseToWatchPage, 'col-md-6 btn1', 'btn btn-primary btn-lg btn-block exe',
                '<i class="fa fa-gamepad" aria-hidden="true"></i> Упражнения <i class="fa fa-pencil" aria-hidden="true"></i>', pagesObj.chooseToWatchPage,
                "main", "url(groups/smurfs.jpg)")
        },

        chooseToWatchPage: function (idCreate, pageClass, jumboClass, headInner, groupListClass, cardClass, nextPagePrincess, nextPageMagicHeroes,
                                     nextPageRussian, nextPageAnimal) {
            myFunctions.baseForPage(idCreate, pageClass, jumboClass, headInner);
            var wrapper = document.querySelector("#wrap");
            var currentPage = document.querySelector("#" + idCreate)
            var gl = document.querySelector("#gl" + idCreate);
            if (gl === null) {
                var groupList = document.createElement("div");
                groupList.setAttribute("class", groupListClass);
                groupList.setAttribute("id", "gl" + idCreate);
                currentPage.appendChild(groupList);
                var rows = document.createElement("div")
                rows.setAttribute("class", "row wow " + idCreate)
                groupList.appendChild(rows);

                for (var i = 0; i < 4; i++) {
                    myFunctions.themesCardsBig("col-lg-3 col-md-6 col-sm-12 to-end sector bigcard " + idCreate, cardClass, heroes.main[i].text, heroes.main[i].image, heroes.main[i].classification, idCreate);
                };
                currentPage.addEventListener('click', chooseGroup)
                function chooseGroup(e) {
                    var refer = e.target;

                    if (refer.getAttribute("class") === "img-fluid card-img-top princess" || refer.getAttribute("class") === "card-block princess") {
                        nextPagePrincess();
                    }

                    else if (refer.getAttribute("class") === "img-fluid card-img-top magic" || refer.getAttribute("class") === "card-block magic") {
                        nextPageMagicHeroes();
                    }
                    else if (refer.getAttribute("class") === "img-fluid card-img-top russian" || refer.getAttribute("class") === "card-block russian") {
                        nextPageRussian();
                    }

                    else if (refer.getAttribute("class") === "img-fluid card-img-top animal" || refer.getAttribute("class") === "card-block animal") {
                        nextPageAnimal();
                    }
                }
            }
        },

        showSecondPageWatchPrincess: function () {
            myFunctions.baseForVideoPage("showSecondPageWatchPrincess", "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-3", "Сказки про принцесс", heroes.princess);
        },
        showSecondPageWatchAnimal: function () {
            myFunctions.baseForVideoPage("showSecondPageWatchAnimal", "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-3", "Сказки про зверей", heroes.animal);
        },
        showSecondPageWatchRussian: function () {
            myFunctions.baseForVideoPage("showSecondPageWatchRussian", "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-3", "Русские сказки", heroes.russian);
        },
        showSecondPageWatchMagicHeroes: function () {
            myFunctions.baseForVideoPage("showSecondPageWatchMagicHeroes", "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-3", "Сказки про волшебных героев", heroes.magicHeroes);
        },

        showSecondPageExePrincess: function () {
            myFunctions.baseForVideoPage("showSecondPageExePrincess", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-3", "Сказки про принцесс", heroes.princess, null);
        },
        showSecondPageExeAnimal: function () {
            myFunctions.baseForVideoPage("showSecondPageExeAnimal", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-3", "Сказки про зверей", heroes.animal, null);
        },
        showSecondPageExeRussian: function () {
            myFunctions.baseForVideoPage("showSecondPageExeRussian", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-3", "Русские сказки", heroes.russian, null);

        },
        showSecondPageExeMagicHeroes: function () {
            myFunctions.baseForVideoPage("showSecondPageExeMagicHeroes", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-3", "Сказки про волшебных героев", heroes.magicHeroes, null);
        },

        congratulationPage: function (headtext) {
            myFunctions.baseForPage("congratulationPage", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-3", headtext)
            myFunctions.twoButtonsPage('col-md-6 btn1', 'to-watch btn btn-warning btn-lg btn-block watch',
                'Ещё посмотреть',
                pagesObj.chooseToWatchPage, 'col-md-6 btn1', 'to-listen btn btn-warning btn-lg btn-block exe',
                'Ещё поиграть', pagesObj.chooseToWatchPage,
                "congratulationPage", "url(groups/characters1.jpg)")
        }
    }

    function showPage(pageId) {
        $(".page").hide();
        var page = document.querySelector(pageId)
        if (page === null && location.hash === "#showSecondPageExePrincess") {
            pagesObj.showSecondPageExePrincess()
        }
        if (page === null && location.hash === "#showSecondPageExeAnimal") {
            pagesObj.showSecondPageExeAnimal()
        }
        if (page === null && location.hash === "#showSecondPageExeRussian") {
            pagesObj.showSecondPageExeRussian()
        }
        if (page === null && location.hash === "#showSecondPageExeMagicHeroes") {
            pagesObj.showSecondPageExeMagicHeroes()
        }
        if (page === null && location.hash === "#showSecondPageWatchPrincess") {
            pagesObj.showSecondPageWatchPrincess()
        }
        if (page === null && location.hash === "#showSecondPageWatchAnimal") {
            pagesObj.showSecondPageWatchAnimal()
        }
        if (page === null && location.hash === "#showSecondPageWatchRussian") {
            pagesObj.showSecondPageWatchRussian()
        }
        if (page === null && location.hash === "#showSecondPageWatchMagicHeroes") {
            pagesObj.showSecondPageWatchMagicHeroes()
        }
        if (page === null && location.hash == "#chooseToExePage") {
            pagesObj.chooseToWatchPage("chooseToExePage", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-1", "<p>Выберите тему сказки</p>",
                "container justify-content-lg-center librarylist exe", "card cardsize card-inverse card-warning mb-3 text-center mb-3",
                pagesObj.showSecondPageExePrincess, pagesObj.showSecondPageExeMagicHeroes, pagesObj.showSecondPageExeRussian,
                pagesObj.showSecondPageExeAnimal)
        }
        if (page || pageId !== "#main") {
            $(pageId).show();
        }
        else if (pageId === "#main" || page === null && location.hash === "#main") {
            pagesObj.showMainPage()
        }
    }
    $(window).on("hashchange", function (event) {
        var svgElement = document.querySelector("#smile")
        showPage(location.hash);
        stopAudio()
        smileHide(location.hash)
        var canvas = document.querySelector("#cDraw")
        canvas.style.display = "none"
    })

    function stopAudio() {
        $('audio').each(function () {
            this.pause()
        })
    }

    function smileHide(hash) {
        var svgElement = document.querySelector("#smile")
        if (hash === "#showSecondPageExePrincess" || hash === "#showSecondPageExeAnimal" || hash === "#showSecondPageExeRussian" ||
            hash === "#showSecondPageExeMagicHeroes" || hash === "#congratulationPage") {
            svgElement.style.display = "none";
        }
    }

    if (location.hash == "#showSecondPageWatchPrincess") {
        pagesObj.showSecondPageWatchPrincess()
    }

    else if (location.hash == "#chooseToExePage") {
        pagesObj.chooseToWatchPage("chooseToExePage", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-1", "<p>Выберите тему сказки</p>",
            "container-fluid librarylist exe", "card cardsize card-inverse card-warning mb-3 text-center mb-3",
            pagesObj.showSecondPageExePrincess, pagesObj.showSecondPageExeMagicHeroes, pagesObj.showSecondPageExeRussian,
            pagesObj.showSecondPageExeAnimal)
    }

    else if (location.hash == "#chooseToWatchPage") {
        pagesObj.chooseToWatchPage("chooseToWatchPage", "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-1", "<p>Выберите тему сказки</p>",
            "container-fluid librarylist", "card cardsize card-inverse card-primary mb-3 text-center mb-3",
            pagesObj.showSecondPageWatchPrincess, pagesObj.showSecondPageWatchMagicHeroes, pagesObj.showSecondPageWatchRussian,
            pagesObj.showSecondPageWatchAnimal)
    }

    else {
        pagesObj.showMainPage()
    }
    return pagesObj;
}())

window.addEventListener("load", pageObj, false)




