const fs = require('fs');
const readline = require('readline');
const Parser = require('rss-parser');
const parser = new Parser();
const { exec } = require('child_process');
let baslik, type, aciklama, url, formattedUrl

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    let flag = false
    try {
        baslik = await askQuestion('Duyuru Başlığı Giriniz: ');
        type = await askQuestion('Duyuru Türü Giriniz (Düğün, sünnet vb.): ');
        aciklama = await askQuestion('Duyuru Açıklaması Giriniz: ');
        date = await askQuestion('Duyuru Tarihi Giriniz: ');
        url = await askQuestion('Duyuru Görseli Linki Giriniz(Yoksa boş bırakınız): ');
        formattedUrl = url.replace(/&/g, '&amp;')

        rl.close();

    } catch (questionError) {
        console.log("Yanıtlar Eklenirken Hata Oluştu", questionError)
        flag = true
    }

    if (!flag) {
        try {
            await updateRSS();
            //Git komutunu çalıştırma fonksiyonunu çağırma
            await runExampleGitCommand('git status', 'git add .', 'git commit -m "rss update test"', 'git push');
        } catch (updateCallError) {
            console.log("Güncelleme hatası:", updateCallError);
        }
    } else {
        console.log("Yanıtlar Eklenirken Hata Oluştu");
    }

};

const updateRSS = async () => {
    try {
        let xml = fs.readFileSync('rss.xml', 'utf8');
        const startIndex = xml.indexOf("<item>");
        const endIndex = xml.indexOf("</channel>");
        const header = xml.substring(0, startIndex);
        const footer = xml.substring(endIndex);
        const body = xml.substring(startIndex, endIndex);

        const item = `
        <item>
        <title>${baslik}</title>
        <type>${type}</type>
        <description>${aciklama}</description>
        <date>${date}</date>
        <enclosure>
        <url>${formattedUrl}</url>
        </enclosure>
        </item>
        `
        xml = header + body + item + footer;

        fs.writeFileSync('rss.xml', xml); // Değişiklikleri dosyaya kaydet 
    } catch (updateError) {
        console.log("RSS Dosyası Güncellenirken Bir Hata Oluştu:", updateError)
    }
};

// Git komutunu çalıştırma fonksiyonu
function runGitCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (execError, stdout, stderr) => {
            if (execError) {
                reject(execError);
            } else {
                resolve(stdout);
            }
        });
    });
}

//Git komutunu çalıştırma
async function runExampleGitCommand(command1, command2, command3, command4) {
    try {
        const command1result = await runGitCommand(command1);
        console.log('Komut 1 çıktısı:', command1result);

        const command2result = await runGitCommand(command2);
        console.log('Komut 2 çıktısı:', command2result);

        const command3result = await runGitCommand(command3);
        console.log('Komut 3 çıktısı:', command3result);

        const command4result = await runGitCommand(command4);
        console.log('Komut 3 çıktısı:', command4result);
    } catch (error) {
        console.error('Komut hatası:', error);
    }
}




main();