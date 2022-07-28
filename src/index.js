"use strict";
const id = document.getElementById("id");
const btn = document.getElementById("btn");
const ans = document.getElementById("anser");
const arry = [
  "start",
  "H",
  "He",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "S",
  "P",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Au",
  "Ag",
  "Cu",
  "Zn",
  "Pb",
  "Ba",
  "Ni",
  "Fe",
  "Sn",
  "Pt",
  "Hg",
  "CO2",
  "H2O",
  "SO2",
  "NO2",
  "CO",
  "H2",
  "N2",
  "O2",
];
const arry2 = [
  "水素",
  "ヘリウム",
  "炭素",
  "窒素",
  "酸素",
  "フッ素",
  "ネオン",
  "ナトリウム",
  "マグネシウム",
  "アルミニウム",
  "硫黄",
  "リン",
  "塩素",
  "アルゴン",
  "カリウム",
  "カルシウム",
  "金",
  "銀",
  "銅",
  "亜鉛",
  "鉛",
  "バリウム",
  "ニッケル",
  "鉄",
  "スズ",
  "白金",
  "水銀",
  "二酸化炭素",
  "水",
  "二酸化硫黄",
  "二酸化窒素",
  "一酸化炭素",
  "水素分子",
  "窒素分子",
  "酸素分子",
  "Finish",
];

// ボタンを押したときの処理
// iを初期化
let i = 0;

// ボタンをクリックしたらスタート
btn.addEventListener("click", () => {
  // 問題を表示
  id.innerHTML = arry2[i];
  // ボタンの言葉を変更
  if (btn.innerText === "スタート") {
    btn.innerText = "決定";
    ans.classList.add("start");
  } else {
    ans.classList.remove("start");
  }
  // 入力したテキストを取得する
  const text = document.getElementById("input-text").value;
  // 問題の答え（arry2）の配列に+1をしたものと比べる
  if (text === arry[i + 1]) {
    // 正解であれば、iを1増やして次の問題を表示
    // テキストをカラに戻す
    ans.innerHTML = "◎";
    i++;
    id.innerHTML = arry2[i];
    if (arry2[i] === "Finish") {
      ans.innerHTML = "";
      btn.disabled = true;
    }
    document.getElementById("input-text").value = "";
  } else {
    // 不正解であれば、テキストをカラにもどす
    ans.innerHTML = "×";
    document.getElementById("input-text").value = "";
  }
});
