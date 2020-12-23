(function (w, d) {
    'use strict'
    if (w.SkillTreeData.Localization.General.Lang) {
        d.documentElement.setAttribute('lang', w.SkillTreeData.Localization.General.Lang);
    }
    
    if (w.SkillTreeData.Localization.Others.CreativeCommonNoteIndex) {
        let link_cc = "<a href=\"https://creativecommons.org/licenses/by-nc-sa/3.0/deed.ja\" target=\"_blank\" rel=\"nofollow noreferrer noopener\">" + w.SkillTreeData.Localization.Others.CreativeCommon + "</a>",
            link_liongames = "<a href=\"http://www.liongames.co.kr/Front/\" target=\"_blank\" rel=\"nofollow noreferrer noopener\">Lion Games</a>";
        d.getElementById("creativecommon-index").innerHTML = w.SkillTreeData.Localization.Others.CreativeCommonNoteIndex.fformat(link_cc, link_liongames);
    }
    
	let theElement = d.getElementById("isPromiseSupportedLabel");
    let text;
    if (typeof (Promise) !== "undefined") {
        text = d.createTextNode("お使いのウェブブラウザは、Promiseオブジェクトをサポートしています。");
        theElement.classList.add("text-feature-supported");
    } else {
        text = d.createTextNode("お使いのウェブブラウザはプロミスオブジェクトをサポートしていません。お使いのブラウザをアップデートするか、この機能をサポートしているブラウザをご利用ください。");
        // https://caniuse.com/#feat=promises
        // Click here to see more information about browsers support Promise
        let theMoreInfo = d.createElement("a");
        theMoreInfo.text = "(Promiseに対応しているブラウザの詳細はこちら)";
        theMoreInfo.href = "https://caniuse.com/#feat=promises";
        theMoreInfo.target = "_blank";
        theMoreInfo.rel = "nofollow noreferrer noopener";
        theElement.classList.add("text-feature-missing");
        theElement.parentNode.appendChild(d.createElement("br"));
        theElement.parentNode.appendChild(theMoreInfo);
    }
    theElement.appendChild(text);
        
    if (w.SkillTreeData.hasOwnProperty("CharacterTable")) {
        let characterTable = w.SkillTreeData.CharacterTable,
            domCharacterList = d.getElementById("character_select");

        let characterNames = Object.keys(characterTable);

        for (let i = 0; i < characterNames.length; i++) {
            let characterData = characterTable[characterNames[i]];
            if (typeof (characterData) === "object" && characterData.hasOwnProperty("url")) {
                //$('charName').src(`assets/images/('url')_Select.png`);
                let elementImg = d.createElement("img"),
                    elementHyperlink = d.createElement("a");
                elementImg.draggable = false;
                elementImg.alt = characterNames[i];
                elementImg.classList.add("center-block");
                elementImg.classList.add("characterimage");
                if (characterData.selectImage) {
                    elementImg.src = characterData.selectImage;
                }
                elementHyperlink.appendChild(elementImg);

                if (characterData.hasOwnProperty("enabled") && !characterData.enabled) {
                    elementHyperlink.href = "javascript:void(0)";
                    elementImg.classList.add("disabled");
                    if (characterData.hasOwnProperty("reason") && typeof (characterData.reason) === "string") {
                        elementHyperlink.addEventListener("click", function (e) {
                            e.preventDefault();
                            alert(characterData.reason);
                        }, true);
                    } else {
                        elementHyperlink.addEventListener("click", function (e) {
                            e.preventDefault();
                        }, true);
                    }
                } else {
                    elementHyperlink.href = characterData.url;
                }

                let theDiv = d.createElement("div");
                theDiv.classList.add("col-md-1");
                theDiv.appendChild(elementHyperlink);
                domCharacterList.appendChild(theDiv);
            }
        }
    }

    d.getElementById("jsEnabled").remove();
})(window, document);

$(function () {
    let thelet_yep_totally_let = $("#sakura");
    if (typeof (thelet_yep_totally_let.sakura) === "function")
        thelet_yep_totally_let.sakura();

    var theTarget = $(".scrolling-wrapper-flexbox"),
        curDown = false,
        // curYPos = 0,
        curXPos = 0,
        mouseOutFunc = function () {
            curDown = false;
        };

    theTarget.mousemove(function (m) {
        if (curDown === true) {
            // theTarget.scrollTop(theTarget.scrollTop() + (curYPos - m.pageY));
            theTarget.scrollLeft(theTarget.scrollLeft() + (curXPos - m.pageX));
        }
    }).mousedown(function (m) {
        curDown = true;
        curYPos = m.pageY;
        curXPos = m.pageX;
    }).mouseleave(mouseOutFunc);

    $(window).mouseup(mouseOutFunc);
});