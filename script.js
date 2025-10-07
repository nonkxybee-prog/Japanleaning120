// 五十音图数据 - 平假名和片假名与罗马音的对应关系
const hiraganaData = [
    { jp: 'あ', romaji: 'a' },
    { jp: 'い', romaji: 'i' },
    { jp: 'う', romaji: 'u' },
    { jp: 'え', romaji: 'e' },
    { jp: 'お', romaji: 'o' },
    { jp: 'か', romaji: 'ka' },
    { jp: 'き', romaji: 'ki' },
    { jp: 'く', romaji: 'ku' },
    { jp: 'け', romaji: 'ke' },
    { jp: 'こ', romaji: 'ko' },
    { jp: 'さ', romaji: 'sa' },
    { jp: 'し', romaji: 'shi' },
    { jp: 'す', romaji: 'su' },
    { jp: 'せ', romaji: 'se' },
    { jp: 'そ', romaji: 'so' },
    { jp: 'た', romaji: 'ta' },
    { jp: 'ち', romaji: 'chi' },
    { jp: 'つ', romaji: 'tsu' },
    { jp: 'て', romaji: 'te' },
    { jp: 'と', romaji: 'to' },
    { jp: 'な', romaji: 'na' },
    { jp: 'に', romaji: 'ni' },
    { jp: 'ぬ', romaji: 'nu' },
    { jp: 'ね', romaji: 'ne' },
    { jp: 'の', romaji: 'no' },
    { jp: 'は', romaji: 'ha' },
    { jp: 'ひ', romaji: 'hi' },
    { jp: 'ふ', romaji: 'fu' },
    { jp: 'へ', romaji: 'he' },
    { jp: 'ほ', romaji: 'ho' },
    { jp: 'ま', romaji: 'ma' },
    { jp: 'み', romaji: 'mi' },
    { jp: 'む', romaji: 'mu' },
    { jp: 'め', romaji: 'me' },
    { jp: 'も', romaji: 'mo' },
    { jp: 'や', romaji: 'ya' },
    { jp: 'ゆ', romaji: 'yu' },
    { jp: 'よ', romaji: 'yo' },
    { jp: 'ら', romaji: 'ra' },
    { jp: 'り', romaji: 'ri' },
    { jp: 'る', romaji: 'ru' },
    { jp: 'れ', romaji: 're' },
    { jp: 'ろ', romaji: 'ro' },
    { jp: 'わ', romaji: 'wa' },
    { jp: 'を', romaji: 'wo' },
    { jp: 'ん', romaji: 'n' },
    // 浊音
    { jp: 'が', romaji: 'ga' },
    { jp: 'ぎ', romaji: 'gi' },
    { jp: 'ぐ', romaji: 'gu' },
    { jp: 'げ', romaji: 'ge' },
    { jp: 'ご', romaji: 'go' },
    { jp: 'ざ', romaji: 'za' },
    { jp: 'じ', romaji: 'ji' },
    { jp: 'ず', romaji: 'zu' },
    { jp: 'ぜ', romaji: 'ze' },
    { jp: 'ぞ', romaji: 'zo' },
    // 半浊音
    { jp: 'ぱ', romaji: 'pa' },
    { jp: 'ぴ', romaji: 'pi' },
    { jp: 'ぷ', romaji: 'pu' },
    { jp: 'ぺ', romaji: 'pe' },
    { jp: 'ぽ', romaji: 'po' }
];

const katakanaData = [
    { jp: 'ア', romaji: 'a' },
    { jp: 'イ', romaji: 'i' },
    { jp: 'ウ', romaji: 'u' },
    { jp: 'エ', romaji: 'e' },
    { jp: 'オ', romaji: 'o' },
    { jp: 'カ', romaji: 'ka' },
    { jp: 'キ', romaji: 'ki' },
    { jp: 'ク', romaji: 'ku' },
    { jp: 'ケ', romaji: 'ke' },
    { jp: 'コ', romaji: 'ko' },
    { jp: 'サ', romaji: 'sa' },
    { jp: 'シ', romaji: 'shi' },
    { jp: 'ス', romaji: 'su' },
    { jp: 'セ', romaji: 'se' },
    { jp: 'ソ', romaji: 'so' },
    { jp: 'タ', romaji: 'ta' },
    { jp: 'チ', romaji: 'chi' },
    { jp: 'ツ', romaji: 'tsu' },
    { jp: 'テ', romaji: 'te' },
    { jp: 'ト', romaji: 'to' },
    { jp: 'ナ', romaji: 'na' },
    { jp: 'ニ', romaji: 'ni' },
    { jp: 'ヌ', romaji: 'nu' },
    { jp: 'ネ', romaji: 'ne' },
    { jp: 'ノ', romaji: 'no' },
    { jp: 'ハ', romaji: 'ha' },
    { jp: 'ヒ', romaji: 'hi' },
    { jp: 'フ', romaji: 'fu' },
    { jp: 'ヘ', romaji: 'he' },
    { jp: 'ホ', romaji: 'ho' },
    { jp: 'マ', romaji: 'ma' },
    { jp: 'ミ', romaji: 'mi' },
    { jp: 'ム', romaji: 'mu' },
    { jp: 'メ', romaji: 'me' },
    { jp: 'モ', romaji: 'mo' },
    { jp: 'ヤ', romaji: 'ya' },
    { jp: 'ユ', romaji: 'yu' },
    { jp: 'ヨ', romaji: 'yo' },
    { jp: 'ラ', romaji: 'ra' },
    { jp: 'リ', romaji: 'ri' },
    { jp: 'ル', romaji: 'ru' },
    { jp: 'レ', romaji: 're' },
    { jp: 'ロ', romaji: 'ro' },
    { jp: 'ワ', romaji: 'wa' },
    { jp: 'ヲ', romaji: 'wo' },
    { jp: 'ン', romaji: 'n' },
    // 浊音
    { jp: 'ガ', romaji: 'ga' },
    { jp: 'ギ', romaji: 'gi' },
    { jp: 'グ', romaji: 'gu' },
    { jp: 'ゲ', romaji: 'ge' },
    { jp: 'ゴ', romaji: 'go' },
    { jp: 'ザ', romaji: 'za' },
    { jp: 'ジ', romaji: 'ji' },
    { jp: 'ズ', romaji: 'zu' },
    { jp: 'ゼ', romaji: 'ze' },
    { jp: 'ゾ', romaji: 'zo' },
    // 半浊音
    { jp: 'パ', romaji: 'pa' },
    { jp: 'ピ', romaji: 'pi' },
    { jp: 'プ', romaji: 'pu' },
    { jp: 'ペ', romaji: 'pe' },
    { jp: 'ポ', romaji: 'po' }
];

// DOM元素
const generateBtn = document.getElementById('generateBtn');
const printBtn = document.getElementById('printBtn');
const previewSection = document.getElementById('previewSection');
const previewContainer = document.getElementById('previewContainer');
const printArea = document.getElementById('printArea');
const printOptionsForm = document.getElementById('printOptionsForm');

// 事件监听器
generateBtn.addEventListener('click', generatePracticeSheet);
printBtn.addEventListener('click', printPracticeSheet);

// 随机打乱数组的函数
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 获取用户选择的选项
function getOptions() {
    const paperSize = document.querySelector('input[name="paperSize"]:checked').value;
    const translationType = document.querySelector('input[name="translationType"]:checked').value;
    const sortOrder = document.querySelector('input[name="sortOrder"]:checked').value;
    const rows = parseInt(document.getElementById('rows').value);
    const wordCount = parseInt(document.getElementById('wordCount').value);
    
    // 获取选择的具体行（如果有）
    const selectedRows = [];
    const rowCheckboxes = document.querySelectorAll('input[name="selectedRows"]:checked');
    rowCheckboxes.forEach(checkbox => {
        selectedRows.push(parseInt(checkbox.value));
    });
    
    return {
        paperSize,
        translationType,
        sortOrder,
        rows,
        wordCount,
        selectedRows
    };
}

// 生成练习表
function generatePracticeSheet() {
    const options = getOptions();
    
    // 根据选择的翻译类型获取相应的数据
    let data = options.translationType === 'hiragana' ? hiraganaData : katakanaData;
    
    // 根据排序方式处理数据
    if (options.sortOrder === 'random') {
        data = shuffleArray(data);
    }
    
    // 根据需要的单词数量截取数据
    const selectedData = data.slice(0, options.wordCount);
    
    // 生成练习表HTML
    const practiceSheetHTML = generateSheetHTML(selectedData, options);
    
    // 显示预览
    previewSection.classList.remove('hidden');
    previewContainer.innerHTML = practiceSheetHTML;
    
    // 启用打印按钮
    printBtn.disabled = false;
    
    // 同时准备打印区域
    printArea.innerHTML = practiceSheetHTML;
}

// 生成练习表的HTML
function generateSheetHTML(data, options) {
    const paperClass = options.paperSize === 'a4' ? 'a4-paper' : 'three-inch-paper';
    
    let html = `<div class="${paperClass}">
        <h3 class="text-center mb-4">五十音图默写练习</h3>
        <p class="text-center mb-6">(${options.translationType === 'hiragana' ? '平假名' : '片假名'} ↔ 罗马音)</p>
        <table class="practice-table">`;
    
    // 生成表头
    html += `<tr>
        <th class="jp-character">${options.translationType === 'hiragana' ? '平假名' : '片假名'}</th>
        <th class="romaji">罗马音</th>
        <th class="jp-character">${options.translationType === 'hiragana' ? '平假名' : '片假名'}</th>
        <th class="romaji">罗马音</th>
    </tr>`;
    
    // 生成练习行
    if (options.selectedRows && options.selectedRows.length > 0) {
        // 如果用户选择了具体的行
        options.selectedRows.forEach(rowIndex => {
            html += '<tr>';
            
            // 每行两个单词
            for (let j = 0; j < 2; j++) {
                const index = rowIndex * 2 + j;
                if (index < data.length) {
                    // 随机决定哪一列留空（日语字符或罗马音）
                    const hideJapanese = Math.random() > 0.5;
                    
                    html += `<td class="${hideJapanese ? 'blank' : 'jp-character'}">`;
                    html += hideJapanese ? '' : data[index].jp;
                    html += '</td>';
                    
                    html += `<td class="${!hideJapanese ? 'blank' : 'romaji'}">`;
                    html += !hideJapanese ? '' : data[index].romaji;
                    html += '</td>';
                } else {
                    // 如果没有更多数据，添加空单元格
                    html += '<td class="blank"></td><td class="blank"></td>';
                }
            }
            
            html += '</tr>';
        });
    } else {
        // 计算需要生成的行数
        const rows = Math.min(options.rows, Math.ceil(data.length / 2));
        
        for (let i = 0; i < rows; i++) {
            html += '<tr>';
            
            // 每行两个单词
            for (let j = 0; j < 2; j++) {
                const index = i * 2 + j;
                if (index < data.length) {
                    // 随机决定哪一列留空（日语字符或罗马音）
                    const hideJapanese = Math.random() > 0.5;
                    
                    html += `<td class="${hideJapanese ? 'blank' : 'jp-character'}">`;
                    html += hideJapanese ? '' : data[index].jp;
                    html += '</td>';
                    
                    html += `<td class="${!hideJapanese ? 'blank' : 'romaji'}">`;
                    html += !hideJapanese ? '' : data[index].romaji;
                    html += '</td>';
                } else {
                    // 如果没有更多数据，添加空单元格
                    html += '<td class="blank"></td><td class="blank"></td>';
                }
            }
            
            html += '</tr>';
        }
    }
    
    html += `</table>
    </div>`;
    
    return html;
}

// 打印或下载练习表
function printPracticeSheet() {
    // 获取用户选择的纸张大小
    const options = getOptions();
    
    // 应用正确的纸张大小样式到打印区域和预览区域
    const printArea = document.getElementById('printArea');
    const previewContainer = document.getElementById('previewContainer');
    
    // 确保打印区域有内容
    if (printArea.innerHTML.trim() === '') {
        // 如果打印区域为空，先生成练习表
        generatePracticeSheet();
    }
    
    // 更新打印区域的纸张大小
    const printPaperElement = printArea.querySelector('div');
    if (printPaperElement) {
        // 移除所有纸张大小类
        printPaperElement.classList.remove('a4-paper', 'three-inch-paper');
        // 添加用户选择的纸张大小类
        printPaperElement.classList.add(options.paperSize === 'a4' ? 'a4-paper' : 'three-inch-paper');
    }
    
    // 也更新预览区域的纸张大小，以便用户可以看到效果
    const previewPaperElement = previewContainer.querySelector('div');
    if (previewPaperElement) {
        previewPaperElement.classList.remove('a4-paper', 'three-inch-paper');
        previewPaperElement.classList.add(options.paperSize === 'a4' ? 'a4-paper' : 'three-inch-paper');
    }
    
    // 触发浏览器打印功能
    window.print();
    
    // 注意：下载功能将通过浏览器的打印对话框实现，用户可以选择"另存为PDF"来下载
}

// 页面加载完成后执行的初始化函数
function init() {
    // 添加行数选择框的事件监听
    const rowsInput = document.getElementById('rows');
    const rowSelectionContainer = document.getElementById('rowSelectionContainer');
    
    if (rowsInput && rowSelectionContainer) {
        // 当行数改变时，更新可选行的数量
        rowsInput.addEventListener('change', updateRowSelectionOptions);
        
        // 初始化行选择选项
        updateRowSelectionOptions();
    }
}

// 更新行选择选项
function updateRowSelectionOptions() {
    const rowsInput = document.getElementById('rows');
    const rowSelectionContainer = document.getElementById('rowSelectionContainer');
    const rowSelectionToggle = document.getElementById('rowSelectionToggle');
    
    if (!rowsInput || !rowSelectionContainer || !rowSelectionToggle) return;
    
    const rows = parseInt(rowsInput.value);
    
    // 清空现有选项
    rowSelectionContainer.innerHTML = '';
    
    // 创建行选择选项
    if (rowSelectionToggle.checked) {
        const maxRows = Math.min(rows, 25); // 限制最多显示25行选择框
        
        // 创建一个滚动容器
        const scrollContainer = document.createElement('div');
        scrollContainer.className = 'max-h-40 overflow-y-auto p-2 border border-gray-200 rounded-lg mt-2';
        
        // 创建行选择网格
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-5 gap-2';
        
        for (let i = 0; i < maxRows; i++) {
            const label = document.createElement('label');
            label.className = 'flex items-center text-sm cursor-pointer';
            label.innerHTML = `
                <input type="checkbox" name="selectedRows" value="${i}" class="mr-1">
                行${i+1}
            `;
            grid.appendChild(label);
        }
        
        scrollContainer.appendChild(grid);
        rowSelectionContainer.appendChild(scrollContainer);
    }
}

// 当页面加载完成时调用初始化函数
document.addEventListener('DOMContentLoaded', init);