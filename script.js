document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "en";
    const synth = window.speechSynthesis;
    let utterance = null;

    const langToggleBtn = document.getElementById("langToggle");
    const ttsPlayBtn = document.getElementById("ttsPlay");
    const ttsStopBtn = document.getElementById("ttsStop");
    
    const contentEn = document.getElementById("content-en");
    const contentKm = document.getElementById("content-km");

    // Language Toggle Switch
    langToggleBtn.addEventListener("click", () => {
        stopSpeech();
        if (currentLang === "en") {
            currentLang = "km";
            contentEn.hidden = true;
            contentKm.hidden = false;
            langToggleBtn.textContent = "Switch to English";
        } else {
            currentLang = "en";
            contentKm.hidden = true;
            contentEn.hidden = false;
            langToggleBtn.textContent = "Switch to ភាសាខ្មែរ";
        }
    });

    // Text To Speech Execution Function
    ttsPlayBtn.addEventListener("click", () => {
        stopSpeech();

        const activeArticle = currentLang === "en" ? contentEn : contentKm;
        const textToRead = activeArticle.innerText;

        utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = currentLang === "en" ? "en-US" : "km-KH";
        utterance.rate = 0.95; // Optimal reading speed

        utterance.onend = () => toggleTtsUI(false);
        utterance.onerror = () => toggleTtsUI(false);

        synth.speak(utterance);
        toggleTtsUI(true);
    });

    ttsStopBtn.addEventListener("click", () => {
        stopSpeech();
    });

    function stopSpeech() {
        if (synth.speaking) {
            synth.cancel();
        }
        toggleTtsUI(false);
    }

    function toggleTtsUI(isPlaying) {
        ttsPlayBtn.hidden = isPlaying;
        ttsStopBtn.hidden = !isPlaying;
    }
});
