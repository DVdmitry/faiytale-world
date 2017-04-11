"use strict"

var myFunctions = (function () {
    var allFunctions = {
        Hero: function (foto, video, name, audio, question, answers, correctAnswer) {
            this.pict = foto;
            this.video = video;
            this.name = name;
            this.audio = audio;
            this.question = question;
            this.answers = answers;
            this.correctAnswer = correctAnswer;
        },

        MainInfo: function (img, text, classification) {
            this.image = img;
            this.text = text
            this.classification = classification
        },

        Button: function (divClass, btnClass, txt, func) {
            this.divClass = divClass;
            this.btnClass = btnClass;
            this.content = txt;
            this.func = func;
        },

        getButton: function (divClass, btnClass, inner, func) {
            var btnBox = document.createElement("div");
            btnBox.setAttribute("class", divClass)
            var btn = document.createElement("button");
            btn.setAttribute("class", btnClass);
            btn.innerHTML = inner;
            btnBox.appendChild(btn);
            return btnBox;
        },

        baseForPage: function (idCreate, pageClass, jumboClass, headInner) {
            location.hash = idCreate
            var wrapper = document.querySelector("#wrap");
            var page = document.createElement("div");
            page.setAttribute("id", idCreate);
            page.setAttribute("class", pageClass);
            wrapper.appendChild(page);
            var jumbo = document.createElement("div");
            jumbo.setAttribute("class", jumboClass);
            page.appendChild(jumbo);
            var header = document.createElement("div");
            header.setAttribute("class", "container-fluid");
            header.setAttribute("id", "head"+idCreate);
            header.style.cssText = "text-align: center"
            header.innerHTML = headInner;
            jumbo.appendChild(header);
            var contentFairy = document.createElement("div");
            contentFairy.setAttribute("class", "container-fluid justify-content-lg-center");
            page.appendChild(contentFairy);
            var row = document.createElement("div");
            row.setAttribute("class", "row")
            row.setAttribute("id", "emptyrow"+idCreate)//justify-content-md-end
            contentFairy.appendChild(row);
        },


        twoButtonsPage: function (div1Class, btn1Class, btn1Value, direction1, div2Class, btn2Class, btn2Value, direction2, pageId, url) {
            var wrapper = document.querySelector("#wrap");
            var page = document.querySelector("#" + pageId)
            var btnWatch = new myFunctions.Button(div1Class, btn1Class, btn1Value, direction1);
            var btnExe = new myFunctions.Button(div2Class, btn2Class, btn2Value, direction2);
            var row = document.querySelector("#emptyrow"+pageId)

            var forBackGrColor = document.createElement("div");
            forBackGrColor.setAttribute("class", "container-fluid forBackGrColor");
            page.appendChild(forBackGrColor);

            var btn1=document.querySelector(".to-watch")

            if (btn1===null) {
                var btn1 = myFunctions.getButton(btnWatch.divClass, btnWatch.btnClass, btnWatch.content, btnWatch.func)

                var btn2 = myFunctions.getButton(btnExe.divClass, btnExe.btnClass, btnExe.content, btnExe.func)
                row.appendChild(btn1);
                row.appendChild(btn2);

                var mainBlock = document.createElement("div");
                mainBlock.setAttribute("class", "mainBlock");
                mainBlock.style.cssText = "background-image : " + url + ";  background-repeat: no-repeat; background-size: 100%; background-position: 50% -10%; width: 100%; height: 1000px; margin: 0px; padding: 0px; "
                forBackGrColor.appendChild(mainBlock);
                row.addEventListener("click", addRemove);

                function addRemove(e) {
                    var currentElement = e.target
                    if (currentElement.getAttribute("class") === btnWatch.btnClass) {
                    pageObj.chooseToWatchPage("chooseToWatchPage", "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-1", "<p>Выберите тему сказки</p>",
                            "container-fluid librarylist", "card cardsize card-inverse card-primary text-center mb-3",
                            pageObj.showSecondPageWatchPrincess, pageObj.showSecondPageWatchMagicHeroes, pageObj.showSecondPageWatchRussian,
                            pageObj.showSecondPageWatchAnimal)
                    }

                    else if (currentElement.getAttribute("class") === btnExe.btnClass) {
                    pageObj.chooseToWatchPage("chooseToExePage", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-1", "<p>Выберите тему сказки</p>",
                            "container-fluid librarylist exe", "card cardsize card-inverse card-warning text-center mb-3",
                            pageObj.showSecondPageExePrincess, pageObj.showSecondPageExeMagicHeroes, pageObj.showSecondPageExeRussian,
                            pageObj.showSecondPageExeAnimal)
                    }
                }
            }
        },

        baseForVideoPage: function (idCreate, pageClass, jumboClass, headInner, heroPath, ref) {
            var wrapper = document.querySelector("#wrap");

            var pageId=idCreate
            location.hash = pageId

            var page = document.createElement("div");
            page.setAttribute("id", pageId);
            page.setAttribute("class", pageClass);
            wrapper.appendChild(page);

            var jumbo = document.createElement("div");
            jumbo.setAttribute("class", jumboClass);
            page.appendChild(jumbo);

            var header = document.createElement("div");
            header.setAttribute("class", "container-fluid");
            header.setAttribute("id", "head");
            header.style.cssText = "text-align: center"
            header.innerHTML = headInner;
            jumbo.appendChild(header);

            var contentFairy = document.createElement("div");
            contentFairy.setAttribute("class", "container-fluid justify-content-lg-center");
            page.appendChild(contentFairy);

            var row = document.createElement("div");
            row.setAttribute("class", "row")
            row.setAttribute("id", "emptyrow")//justify-content-md-end
            contentFairy.appendChild(row);

            var arrayPict = [];
            var arrayName = [];
            var arrayFunc = [];
            var arrayVideo = [];
            var arrayQuestion = [];
            var arrayAnswers = [];
            var arrayCorrectAnswer = [];

            for (var i = 0; i < heroPath.length; i++) {
                for (var k in heroPath[i])
                arrayPict.push(heroPath[i][k].pict);
                arrayName.push(heroPath[i][k].name);
                arrayFunc.push(heroPath[i][k].audio);
                arrayVideo.push(heroPath[i][k].video);
                arrayAnswers.push((heroPath[i][k].answers))
                arrayQuestion.push(heroPath[i][k].question);
                arrayCorrectAnswer.push(heroPath[i][k].correctAnswer);
                cardFairy(arrayName[i], arrayPict[i][0], arrayFunc[i], arrayVideo[i], arrayPict[i], arrayAnswers[i], arrayQuestion[i], arrayCorrectAnswer[i], Object.keys(heroPath[i]))
            console.log(heroPath.length)
            }

            function cardFairy(ftName, ftPict, referenceSound, referenceLook, arayPict, arrayAnswers, arrayQuestion, arrayCorrectAnswer, IdFT) {

                var sector1 = document.createElement("div");
                sector1.setAttribute("class", "col-lg-4 col-md-4 col-sm-6 to-start text-center sector")
                row.appendChild(sector1);

                var card = document.createElement("div");
                card.setAttribute("class", "card mb-4 text-center center-block")
                sector1.appendChild(card);

                var cardBlock = document.createElement("div");
                cardBlock.setAttribute("class", "card-block");
                cardBlock.innerHTML = ftName;
                card.appendChild(cardBlock);

                var image = document.createElement("img");
                image.setAttribute("src", ftPict);
                image.setAttribute("class", "img-fluid card-img-top cardsize2");
                card.appendChild(image);

                if (ref === null) {
                    var btnListen = new myFunctions.Button('col-md-12  btn1 col-lg-12', 'btn btn-warning  btn-lg btn-block listen' + ' ' + Object.keys(heroPath[i])[0], '<i class="fa fa-music" aria-hidden="true"></i> Пройти тест');
                    card.appendChild(myButtonAudio(btnListen.divClass, btnListen.btnClass, btnListen.content, btnListen.func, ftPict, pageId))

                } else {
                    var btnListen = new myFunctions.Button('col-md-12  btn1 col-lg-12', 'btn btn-primary  btn-lg btn-block listen' + ' ' + Object.keys(heroPath[i])[0], '<i class="fa fa-music" aria-hidden="true"></i> Послушать', referenceSound);
                    card.appendChild(myButtonAudio(btnListen.divClass, btnListen.btnClass, btnListen.content, btnListen.func, ftPict, pageId))
                }
                if (ref !== null) {

                    var btnLook = new myFunctions.Button('col-md-12  btn1 col-lg-12', 'btn btn-primary  btn-lg btn-block look' + ' ' + Object.keys(heroPath[i])[0], 'Посмотреть <i class="fa fa-film" aria-hidden="true"></i>', referenceLook);
                    card.appendChild(myButtonVideo(btnLook.divClass, btnLook.btnClass, btnLook.content, btnLook.func));

                    function myButtonVideo(divClass, btnClass, inner, youtube) {

                        var btnBox = document.createElement("div");
                        btnBox.setAttribute("class", divClass)

                        var btn = document.createElement("button");
                        btn.setAttribute("class", btnClass);
                        btn.innerHTML = inner;
                        btnBox.appendChild(btn);
                        btn.addEventListener("click", youtubeToCard);
                        return btnBox;

                        function youtubeToCard() {
                            var ref = document.createElement("div");
                            ref.innerHTML = youtube;
                            card.replaceChild(ref, image)
                        }
                    }
                }

                function myButtonAudio(divClass, btnClass, inner, audioRefer, pictRefer, pageId) {

                    var btnBox = document.createElement("div");
                    btnBox.setAttribute("class", divClass)

                    var btn = document.createElement("button");
                    btn.setAttribute("class", btnClass);
                    btn.innerHTML = inner;
                    btnBox.appendChild(btn);
                    if (ref === null) {
                        btn.addEventListener("click", toQuestionForm);
                    } else {
                        btn.addEventListener("click", toAudioPage);
                    }

                    return btnBox;

                    function toAudioPage() {

                        myFunctions.baseForPage(IdFT, "page", "jumbotron jumbotron-fluid bg-info text-white display-3 py-1", "<p>Библиотека сказок</p>")
                        var page = document.querySelector("#" + IdFT);
                        var pPanel = document.querySelector("#pictpanel"+ IdFT)
                        if (pPanel) {
                        }
                        else {

                            var bigPanel = document.createElement("div");
                            bigPanel.setAttribute("class", "container-fluid pict-panel");
                            bigPanel.setAttribute("id", "pictpanel"+ IdFT)
                            page.appendChild(bigPanel);

                            var picturePanel = document.createElement("div");
                            picturePanel.setAttribute("class", "row d-flex justify-content-between");
                            picturePanel.setAttribute("id", "pictPanel");//justify-content-md-end
                            bigPanel.appendChild(picturePanel);

                            var sector1 = document.createElement("div");
                            sector1.setAttribute("class", "col-lg-2 col-md-2 col-sm-2 block flex-first sect")
                            picturePanel.appendChild(sector1);

                            var sector2 = document.createElement("div");
                            sector2.setAttribute("class", "col-lg-2 col-md-2 col-sm-2 block flex-last sect")
                            picturePanel.appendChild(sector2);

                            for (var i = 0; i < 2; i++) {
                                myFunctions.themesCards(sector1, "card text-center mainClassCard ", heroes.main[i].text, heroes.main[i].image, heroes.main[i].classification);
                            }

                            for (var i = 2; i < 4; i++) {
                                myFunctions.themesCards(sector2, "card text-center mainClassCard ", heroes.main[i].text, heroes.main[i].image, heroes.main[i].classification);
                            }

                            var sector3 = document.createElement("div");
                            sector3.setAttribute("class", "col-lg-1 col-md-1 col-sm-1 sect")
                            picturePanel.appendChild(sector3);

                            var arrowLeft = document.createElement("img");
                            arrowLeft.setAttribute("src", "groups/arrowsleft.svg");
                            arrowLeft.setAttribute("id", "left");
                            arrowLeft.setAttribute("height", "50px");
                            arrowLeft.setAttribute("width", "70px");
                            sector3.appendChild(arrowLeft);

                            var sectorBigPict = document.createElement("div");
                            sectorBigPict.setAttribute("class", "col-lg-6 col-md-12 justify-content-lg-center bigpict")
                            picturePanel.appendChild(sectorBigPict);

                            var imag = document.createElement("img");
                            imag.setAttribute("src", ftPict);
                            imag.setAttribute("class", "big-picture center img-fluid");
                            sectorBigPict.appendChild(imag);

                            var audio = document.createElement("audio");
                            audio.setAttribute("preload", "auto");
                            audio.setAttribute("controls", "controls");
                            audio.setAttribute("id", "audio"+IdFT);
                            audio.setAttribute("class", "audio");
                            sectorBigPict.appendChild(audio);

                            var source = document.createElement("source");
                            source.setAttribute("id", "audioPlay");
                            source.setAttribute("src", audioRefer);
                            source.setAttribute("type", "audio/mpeg");
                            audio.appendChild(source);

                            var sector4 = document.createElement("div");
                            sector4.setAttribute("class", "col-lg-1 col-md-1 col-sm-1 sect")
                            picturePanel.appendChild(sector4);

                            var arrowRight = document.createElement("img");
                            arrowRight.setAttribute("src", "groups/arrowsright.svg");
                            arrowRight.setAttribute("id", "right");
                            arrowRight.setAttribute("height", "50px");
                            arrowRight.setAttribute("width", "70px");
                            sector4.appendChild(arrowRight);

                            var smallPanel = document.createElement("div");
                            smallPanel.setAttribute("class", "container-fluid smallpictpanel");
                            bigPanel.appendChild(smallPanel);

                            var smallPicturePanel = document.createElement("div");
                            smallPicturePanel.setAttribute("class", "row justify-content-md-center"); //justify-content-md-end
                            smallPanel.appendChild(smallPicturePanel);

                            for (var k = 0; k < 12; k++) {
                                var sectorPict = document.createElement("div");
                                sectorPict.setAttribute("class", "col-lg-1 col-md-1 col-sm-1 sectorPict")
                                smallPicturePanel.appendChild(sectorPict);

                                var smallImage = document.createElement("img");
                                smallImage.setAttribute("src", arayPict[k]);
                                smallImage.setAttribute("class", "small-picture");
                                sectorPict.appendChild(smallImage);
                            }

                            bigPanel.addEventListener("click", pictChange);

                            function pictChange(e) {
                                var targetElement = e.target;
                                if (targetElement.className == "small-picture") {
                                    imag.src = targetElement.getAttribute("src");
                                }
                                if (targetElement.className == "img-fluid princess") {
                                   pageObj.showSecondPageWatchPrincess();
                                }
                                if (targetElement.className == "img-fluid magic") {
                                    pageObj.showSecondPageWatchMagicHeroes();
                                }
                                if (targetElement.className == "img-fluid animal") {
                                   pageObj.showSecondPageWatchAnimal();
                                }
                                if (targetElement.className == "img-fluid russian") {
                                   pageObj.showSecondPageWatchRussian();
                                }
                            }

                            var number = counter()
                            var interv = setInterval(slideShow, 10000)
                            arrowLeft.addEventListener("click", slideShow)
                            arrowRight.addEventListener("click", slideShow)

                            function slideShow() {
                                var temp = number();
                                imag.src = arayPict[temp];
                                arrowLeft.removeEventListener("click", slideShow)
                                arrowRight.removeEventListener("click", slideShow)
                                arrowLeft.addEventListener("click", backwards)
                                arrowRight.addEventListener("click", forwards)

                                function backwards(e) {
                                    clearInterval(interv)
                                    imag.src = arayPict[temp - 1];
                                    temp = temp - 1;
                                    if (temp < 1) {
                                        temp = 12;
                                    }
                                }

                                function forwards(e) {
                                    clearInterval(interv)
                                    imag.src = arayPict[temp + 1];
                                    temp = temp + 1;
                                    if (temp > 10) {
                                        temp = -1;
                                    }
                                }
                            }

                            function counter() {
                                var num = 0;
                                return function () {
                                    return num++
                                }
                            }

                            setTimeout(bob, 120000)

                            function bob() {
                                clearInterval(interv)
                            }
                        }
                    }
                }

                function toQuestionForm() {
                    myFunctions.baseForPage(IdFT+"q", "page", "jumbotron jumbotron-fluid bg-warning text-white display-3 py-3", ftName, ftPict, arrayQuestion, arrayCorrectAnswer[i])

                    var svgElement = document.querySelector("#smile")

                    if(svgElement){
                        svgElement.style.display = "block";
                    }

                        function counter() {
                            var num = 0;
                            return function () {
                                return num++
                            }
                        }

                        var number = counter();
                        var wrapper = document.querySelector("#wrap");
                        var page = document.querySelector("#" + IdFT+"q")
                        var row = document.querySelector("#emptyrow" + IdFT+"q")

                    var bPanel = document.querySelector("#bPanel"+ IdFT+"q")
                    if (bPanel) {
                    }
                    else {

                        function iProgress() {
                            var numb = 0;
                            return function () {
                                return numb += 20;
                            }
                        }

                        var scale = iProgress();

                        function progressive(){
                            $("#progress").progressbar({
                                value: scale()
                            });
                        }

                        var bigPanel = document.createElement("div");
                        bigPanel.setAttribute("class", "container-fluid");
                        bigPanel.setAttribute("id", "bPanel"+IdFT+"q");
                        page.appendChild(bigPanel);

                        var picturePanel = document.createElement("div");
                        picturePanel.setAttribute("class", "row ");
                        picturePanel.setAttribute("id", "qPanel");//justify-content-md-end
                        bigPanel.appendChild(picturePanel);

                        var sector1 = document.createElement("div");
                        sector1.setAttribute("class", "col-lg-3 col-md-3 col-sm-3 ")
                        picturePanel.appendChild(sector1);

                        var cardForTxt = document.createElement("div");
                        cardForTxt.setAttribute("class", "card mb-3 text-center center-block")
                        sector1.appendChild(cardForTxt);

                        var cardBlockTxt = document.createElement("div");
                        cardBlockTxt.setAttribute("class", "card-block cardTxt");
                        cardBlockTxt.innerHTML = "Очков набрано:";
                        cardForTxt.appendChild(cardBlockTxt);

                        var inputPoints = document.createElement("input");
                        inputPoints.setAttribute("type", "text");
                        inputPoints.setAttribute("class", "inputPoints");
                        inputPoints.setAttribute("value", "0");
                        cardForTxt.appendChild(inputPoints);

                        var sectorPict = document.createElement("div");
                        sectorPict.setAttribute("class", "col-lg-6 col-md-8 col-sm-6 sectorPict")
                        picturePanel.appendChild(sectorPict);

                        var card = document.createElement("div");
                        card.setAttribute("class", "card mb-3 text-center center-block")
                        sectorPict.appendChild(card);

                        var cardBlockForPict = document.createElement("div");
                        cardBlockForPict.setAttribute("class", "card-block cardTxt");
                        card.appendChild(cardBlockForPict);

                        var image = document.createElement("img");
                        image.setAttribute("src", ftPict);
                        image.setAttribute("class", "img-fluid card-img-top cardsize2");
                        card.appendChild(image);

                        var twoBlock = document.createElement("div");
                        twoBlock.setAttribute("class", "col-lg-2 col-md-1 col-sm-1 block")
                        picturePanel.appendChild(twoBlock);

                        var sector4 = document.createElement("div");
                        sector4.setAttribute("class", "col-lg-12 col-md-12 col-sm-6")
                        sector4.setAttribute("id", "progress")
                        twoBlock.appendChild(sector4);

                        $("#progress").progressbar();

                        chooseQuestions(number())

                        function chooseQuestions(nm) {
                            if (nm < 5) {

                                var sectorBlock = document.createElement("div");
                                sectorBlock.setAttribute("class", "col-lg-2 col-md-1 col-sm-1 block")
                                twoBlock.appendChild(sectorBlock);

                                var sector2 = document.createElement("div");
                                sector2.setAttribute("class", "col-lg-3 col-md-2 col-sm-2 vision")
                                sectorBlock.appendChild(sector2);

                                sector2.appendChild(myFunctions.getButton('col-md-6 btn1', 'btn btn-success btn-lg', "Далее"));
                                var btnSuccess = document.querySelector(".btn-success")

                                var sector3 = document.createElement("div");
                                sector3.setAttribute("class", "col-lg-2 col-md-2 col-sm-2 vision")
                                sectorBlock.appendChild(sector3);
                                sector3.appendChild(myFunctions.getButton('col-md-6 btn1', 'btn btn-danger btn-lg', "Неправильно"));

                                var qBtns = document.createElement("div");
                                qBtns.setAttribute("class", "row ");
                                qBtns.setAttribute("id", "qPanel");//justify-content-md-end
                                bigPanel.appendChild(qBtns);

                                var qBtnsElems = []
                                for (i = 0; i < 4; i++) {
                                    qBtnsElems[i] = myFunctions.getButton('col-md-6 btn1', 'btn btn-warning  btn-lg btn-block qBtnsElems' + i, arrayAnswers[nm][i])
                                    qBtns.appendChild(qBtnsElems[i]);
                                }
                                cardBlockForPict.innerHTML = arrayQuestion[nm];
                                qBtns.addEventListener('click', go)

                                function go(e) {

                                    var targetElement = e.target;
                                    if (targetElement.innerHTML === arrayCorrectAnswer[nm] && targetElement.tagName == "BUTTON") {
                                        progressive();
                                        svgElement.classList.add("glad")
                                        svgElement.classList.remove("default")

                                        var bonusPlus = document.createElement("h1")
                                        bonusPlus.innerHTML = "+2";
                                        bonusPlus.setAttribute("class", "bonusUp");
                                        sector1.appendChild(bonusPlus)

                                        var incrInput = parseInt(inputPoints.getAttribute("value"));
                                        var increase = inputPoints.setAttribute("value", incrInput + 2);

                                        sector2.setAttribute("class", "col-lg-2 col-md-2 col-sm-2")
                                        sector3.setAttribute("class", "col-lg-2 col-md-2 col-sm-2 vision")

                                        for (i = 0; i < qBtnsElems.length; i++) {
                                            qBtnsElems[i].children[0].disabled = true;
                                        }

                                        setTimeout(clear, 2000)
                                        function clear() {
                                            sector1.removeChild(bonusPlus)
                                            svgElement.classList.remove("glad")
                                            svgElement.classList.add("default")
                                        }

                                        var aud = document.createElement("audio");
                                        aud.setAttribute("controls", "controls");
                                        aud.setAttribute("autoplay", "autoplay");
                                        aud.setAttribute("id", "fart");
                                        page.appendChild(aud);

                                        var source = document.createElement("source");
                                        source.setAttribute("id", "playFart");
                                        source.setAttribute("src", "groups/puk.mp3");
                                        source.setAttribute("type", "audio/mpeg");
                                        aud.appendChild(source);

                                        var canvas = document.querySelector("#cDraw")
                                        canvas.style.display = "block"
                                        var c = canvas.getContext("2d")

                                        var x = 0;
                                        var y = 0;

                                        function go() {
                                            c.clearRect(0,0, canvas.width, canvas.height)
                                            c.beginPath()
                                            c.moveTo(250 + x, 400 + y)
                                            c.arcTo(300 + x, 320 + y, 250 + x, 280 + y, 30)
                                            c.arcTo(250 + x, 280 + y, 200 + x, 320 + y, 40)
                                            c.arcTo(200 + x, 320 + y, 250 + x, 400 + y, 30)
                                            c.arcTo(250 + x, 400 + y, 298 + x, 320 + y, 1)
                                            c.lineTo(250 + x, 430 + y)
                                            c.fillStyle = "hsla("+x+",100%,50%,0.6)"
                                            c.fill()
                                            c.stroke()
                                            c.closePath()
                                            x+=1
                                            y-=1
                                            var cancelAF = requestAnimationFrame(go)
                                        }
                                        go()
                                    }

                                    if (targetElement.innerHTML !== arrayCorrectAnswer[nm] && targetElement.tagName == "BUTTON") {

                                        svgElement.classList.add("sad")
                                        svgElement.classList.remove("default")

                                        var bonusMinus = document.createElement("h1")
                                        bonusMinus.innerHTML = "-2";
                                        bonusMinus.setAttribute("class", "bonusDown");
                                        sector1.appendChild(bonusMinus)
                                        sector3.setAttribute("class", "col-lg-2 col-md-2 col-sm-2")
                                        sector2.setAttribute("class", "col-lg-2 col-md-2 col-sm-2 vision")

                                        inputPoints.setAttribute("value", parseInt(inputPoints.getAttribute("value")) - 2);

                                        setTimeout(clear, 2000)
                                        function clear() {
                                            sector1.removeChild(bonusMinus)
                                            svgElement.classList.remove("sad")
                                            svgElement.classList.add("default")

                                        }
                                    }
                                }

                                sectorBlock.addEventListener("click", changeQuestions)

                                function changeQuestions(e) {
                                    var canvas = document.querySelector("#cDraw")
                                    canvas.style.display = "none"
                                    var btnToChangeQ = e.target;
                                    if (nm === 4 && inputPoints.getAttribute("value") == 10 && btnToChangeQ.getAttribute("class") === "btn btn-success btn-lg") {
                                        pageObj.congratulationPage("<p>Ты настоящий знаток сказок!</p>");
                                        page.removeChild(bigPanel)
                                       }
                                    else if (nm === 4 && inputPoints.getAttribute("value") == 8 && btnToChangeQ.getAttribute("class") === "btn btn-success btn-lg") {
                                        pageObj.congratulationPage("<p>Ты хорошо знаешь эту сказку!</p>");
                                        page.removeChild(bigPanel)

                                    }
                                    else if (nm === 4 && inputPoints.getAttribute("value") == 6 && btnToChangeQ.getAttribute("class") === "btn btn-success btn-lg") {
                                         pageObj.congratulationPage("<p>Ты не плохо знаешь эту сказку!</p>");
                                        page.removeChild(bigPanel)

                                    }
                                    else if (nm === 4 && inputPoints.getAttribute("value") < 5 && btnToChangeQ.getAttribute("class") === "btn btn-success btn-lg") {
                                        pageObj.congratulationPage("<p>Хочешь попробовать еще раз?</p>");
                                        page.removeChild(bigPanel)
                                    }

                                    else if (btnToChangeQ.getAttribute("class") === "btn btn-success btn-lg") {
                                        twoBlock.removeChild(sectorBlock)
                                        bigPanel.removeChild(qBtns)
                                        chooseQuestions(number())
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        themesCards: function (divForBlock, classSector2, text, picture, classific) {

            var card = document.createElement("div");
            card.setAttribute("class", classSector2)
            card.innerHTML = text;
            divForBlock.appendChild(card);

            var image = document.createElement("img");
            image.setAttribute("src", picture);
            image.setAttribute("class", "img-fluid" + " " + classific);
            card.appendChild(image);
        },

        themesCardsBig: function (classSector1, classSector2, text, picture, classific, rowclass) {
            var row = document.querySelector("." + rowclass)

            var sector1 = document.createElement("div");
            sector1.setAttribute("class", classSector1 + " " + classific);
            row.appendChild(sector1);

            var card = document.createElement("div");
            card.setAttribute("class", classSector2 + " " + classific);
            sector1.appendChild(card);

            var cardBlock = document.createElement("div");
            cardBlock.setAttribute("class", "card-block" + " " + classific);
            cardBlock.innerHTML = text;
            card.appendChild(cardBlock);

            var image = document.createElement("img");
            image.setAttribute("src", picture);
            image.setAttribute("class", "img-fluid card-img-top" + " " + classific);
            card.appendChild(image);
        }
    }

    return allFunctions;
}())





