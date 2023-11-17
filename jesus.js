// JavaScriptコードを追加
document.addEventListener("DOMContentLoaded", function () {
    // ナビゲーションリンクを取得
    const navLinks = document.querySelectorAll("nav ul li a");

    // ナビゲーションリンクがクリックされたときの処理
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // リンクのデフォルト動作を無効にする

            // クリックされたリンクのhref属性からセクションIDを取得
            const sectionId = this.getAttribute("href").substring(1);

            // 対応するセクションの要素を取得
            const section = document.getElementById(sectionId);

            if (section) {
                // セクションまでスクロールするアニメーション
                window.scrollTo({
                    top: section.offsetTop - 50, // セクションの上端から50px下にスクロール
                    behavior: "smooth", // スムーススクロールを有効にする
                });
            }
        });
    });
});
