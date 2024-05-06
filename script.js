document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // تقوم بإرسال البيانات إلى الخادم للتحقق من صحة تسجيل الدخول
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;

        // في هذا المثال، نفترض أن عملية التحقق ناجحة
        const authenticated = true;

        if (authenticated) {
            window.location.href = "index.html"; // توجيه المستخدم بعد تسجيل الدخول
        } else {
            alert("فشل تسجيل الدخول. الرجاء المحاولة مرة أخرى.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const videoCodeInput = document.getElementById("codeInput");
    const startButton = document.getElementById("startButton");
    const iframe = document.querySelector('iframe');

    let codesUsed = [];

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // تقوم بإرسال البيانات إلى الخادم للتحقق من صحة تسجيل الدخول
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("password").value;

        // في هذا المثال، نفترض أن عملية التحقق ناجحة
        const authenticated = true;

        if (authenticated) {
            startButton.addEventListener("click", function() {
                const enteredCode = videoCodeInput.value.trim();

                if (codesUsed.includes(enteredCode)) {
                    alert("هذا الكود تم استخدامه بالفعل.");
                } else if (enteredCode === "الكود_الصحيح") {
                    iframe.src += "?autoplay=1"; // تشغيل الفيديو تلقائيًا
                    codesUsed.push(enteredCode);
                    alert("تم بدء تشغيل الفيديو.");
                } else {
                    alert("الكود غير صحيح.");
                }

                videoCodeInput.value = "";
            });
        } else {
            alert("فشل تسجيل الدخول. الرجاء المحاولة مرة أخرى.");
        }
    });
});