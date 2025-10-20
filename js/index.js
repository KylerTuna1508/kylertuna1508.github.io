document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const videoScreen = document.getElementById("videoScreen");
    const videoContainer = document.getElementById("videoContainer");
    const waguriVideo = document.getElementById("waguriVideo");
    const videoMessage = document.getElementById("videoMessage");
    const mainContent = document.getElementById("mainContent");
    
    // Handle start button click
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        videoContainer.style.display = "block";
        
        // Tự động phát video (không fullscreen)
        waguriVideo.play();
    });

    // Handle video end event
    waguriVideo.addEventListener("ended", function() {
        videoMessage.style.display = "block";
        
        // Show main content after 3 seconds
        setTimeout(function() {
            videoScreen.style.display = "none";
            mainContent.style.display = "block";
        }, 3000);
    });

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    
    // Messages khi bấm nút No
    const noMessages = [
        "Đừng bấm no mà =((",
        "Cho anh cơ hội nhé!",
        "Em là người tuyệt vời nhất!",
        "Vk là số 1 trong tim anh!",
        "Đừng màaaaaa"
    ];
    
    // Nội dung các bức thư
    const letters = [
        {
            number: 1,
            content: "Đây là món quà mà anh đã chuẩn bị cho em trong hôm nay nè :3. Hy vọng em sẽ thích nó! ❤️"
        },
        {
            number: 2,
            content: "Bé ơi hôm nay là 20/10 đó nha, anh chúc em có được nhiều niềm vui vè, dễ thương và luôn vui vẻ nhé!"
        },
        {
            number: 3,
            content: "Vk anh is the best số 1 luôn :3. Yêu em nhiều lắm luôn đó nha! 💖"
        },
        {
            number: 4,
            content: "A mong có thể được bên em thật lâu, mong là những ngày như thế này kéo dài mãi"
        },
        {
            number: 5,
            content: "Nhiều lúc a nhớ em lắm kiểu mới nhắn tin buổi sáng mà buổi chiều lại nhớ òi. Chán anh thật chớ! =))"
        },
        {
            number: 6,
            content: "Khi nào mệt thì về với a nha :3 a luôn ở đây ngồi thật ngoan để lắng nghe em bất kể lúc nào khi em cần! ❤️"
        },
        {
            number: 7,
            content: "Vì, Anh cảm thấy mình thật may mắn khi được em cho anh cơ hội được có em bên cạnh. Em là nguồn động lực lớn nhất của anh!"
        },
        {
            number: 8,
            content: "Em là điều tuyệt vời nhứt của anh :3, là động lực để anh cố gắng mỗi ngày. yêu em nhiều lắm! 💖✨"
        }
    ];
    
    let noClickCount = 0;

    yesButton.addEventListener("click", function() {
        document.body.innerHTML = `
            <div class="letter-page">
                <div class="heart-container">
                    <div class="heart-animation">❤️</div>
                </div>
                <img src="./images/awwcookie-luvicookie.gif" alt="Love GIF" class="letter-gif" />
                <div id="letterContainer" class="letter-content"></div>
                <button id="nextButton" class="next-button">Tiếp theo →</button>
            </div>
        `;
        displayLetter(0);
    });

    noButton.addEventListener("click", function() {
        if (noClickCount < 5) {
            noClickCount++;
            noButton.style.fontSize = `${Math.max(10, 20 - noClickCount * 2)}px`;
            yesButton.style.fontSize = `${20 + noClickCount * 5}px`;
            noButton.textContent = noMessages[noClickCount - 1];
        }
    });

    function displayLetter(index) {
        const letterContainer = document.getElementById("letterContainer");
        const nextButton = document.getElementById("nextButton");
        
        if (index < letters.length) {
            letterContainer.innerHTML = `
                <div class="letter-card">
                    <h2>💕 Yêu em nhất 💕</h2>
                    <p>${letters[index].content}</p>
                </div>
            `;
            
            if (index === letters.length - 1) {
                nextButton.textContent = "Kết thúc ❤️";
                nextButton.onclick = function() {
                    letterContainer.innerHTML = `
                        <div class="letter-card final">
                            <h2>💕 Yêu em nhiều lắm! 💕</h2>
                            <p>Gặp được em là điều tuyệt vời nhất của anh! 😘</p>
                        </div>
                    `;
                    nextButton.style.display = "none";
                };
            } else {
                nextButton.onclick = function() {
                    displayLetter(index + 1);
                };
            }
        }
    }
});