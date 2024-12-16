// Basic kanji data

const kanjiData = [
            {
                kanji: "一",
                onReading: "イチ",
                kunReading: "ひと-つ",
                strokes: 1,
                grade: 1,
                session: 1,
                examples: ["一つ (ひとつ)", "一年 (いちねん)"],
            },
            {
                kanji: "右",
                onReading: "ウ",
                kunReading: "みぎ",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["右手 (みぎて)", "右側 (みぎがわ)"]
            },
            {
                kanji: "雨",
                onReading: "ウ",
                kunReading: "あめ",
                strokes: 8,
                grade: 1,
                session: 1,
                examples: ["雨天 (うてん)", "大雨 (おおあめ)"]
            },
            {
                kanji: "円",
                onReading: "エン",
                kunReading: "まる",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["円形 (えんけい)", "百円 (ひゃくえん)"]
            },
            {
                kanji: "王",
                onReading: "オウ",
                kunReading: "",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["王様 (おうさま)", "女王 (じょおう)"]
            },
            {
                kanji: "音",
                onReading: "オン",
                kunReading: "おと",
                strokes: 9,
                grade: 1,
                session: 1,
                examples: ["音楽 (おんがく)", "音声 (おんせい)"]
            },
            {
                kanji: "下",
                onReading: "カ",
                kunReading: "した",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["地下 (ちか)", "下手 (へた)"]
            },
            {
                kanji: "火",
                onReading: "カ",
                kunReading: "ひ",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["火山 (かざん)", "火曜日 (かようび)"]
            },
            {
                kanji: "花",
                onReading: "カ",
                kunReading: "はな",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["花火 (はなび)", "花見 (はなみ)"]
            },
            {
                kanji: "貝",
                onReading: "バイ",
                kunReading: "かい",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["貝殻 (かいがら)", "貝類 (かいるい)"]
            },
            {
                kanji: "学",
                onReading: "ガク",
                kunReading: "まな-ぶ",
                strokes: 8,
                grade: 1,
                session: 1,
                examples: ["学校 (がっこう)", "学年 (がくねん)"]
            },
            {
                kanji: "気",
                onReading: "キ",
                kunReading: "",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["気分 (きぶん)", "天気 (てんき)"]
            },
            {
                kanji: "九",
                onReading: "キュウ",
                kunReading: "ここの-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["九月 (くがつ)", "九人 (きゅうにん)"]
            },
            {
                kanji: "休",
                onReading: "キュウ",
                kunReading: "やす-む",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["休日 (きゅうじつ)", "休憩 (きゅうけい)"]
            },
            {
                kanji: "玉",
                onReading: "ギョク",
                kunReading: "たま",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["玉ねぎ (たまねぎ)", "玉石 (ぎょくせき)"]
            },
            {
                kanji: "金",
                onReading: "キン",
                kunReading: "かね",
                strokes: 8,
                grade: 1,
                session: 1,
                examples: ["金曜日 (きんようび)", "金色 (きんいろ)"]
            },
            {
                kanji: "空",
                onReading: "クウ",
                kunReading: "そら",
                strokes: 8,
                grade: 1,
                session: 1,
                examples: ["空港 (くうこう)", "空気 (くうき)"]
            },
            {
                kanji: "月",
                onReading: "ゲツ",
                kunReading: "つき",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["月曜日 (げつようび)", "月光 (げっこう)"]
            },
            {
                kanji: "犬",
                onReading: "ケン",
                kunReading: "いぬ",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["犬小屋 (いぬごや)", "番犬 (ばんけん)"]
            },
            {
                kanji: "見",
                onReading: "ケン",
                kunReading: "み-る",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["見学 (けんがく)", "見物 (けんぶつ)"]
            },
            {
                kanji: "五",
                onReading: "ゴ",
                kunReading: "いつ-つ",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["五月 (ごがつ)", "五人 (ごにん)"]
            },
            {
                kanji: "口",
                onReading: "コウ",
                kunReading: "くち",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["口紅 (くちべに)", "人口 (じんこう)"]
            },
            {
                kanji: "校",
                onReading: "コウ",
                kunReading: "",
                strokes: 10,
                grade: 1,
                session: 1,
                examples: ["学校 (がっこう)", "校庭 (こうてい)"]
            },
            {
                kanji: "左",
                onReading: "サ",
                kunReading: "ひだり",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["左手 (ひだりて)", "左側 (ひだりがわ)"]
            },
            {
                kanji: "三",
                onReading: "サン",
                kunReading: "みっ-つ",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["三月 (さんがつ)", "三人 (さんにん)"]
            },
            {
                kanji: "山",
                onReading: "サン",
                kunReading: "やま",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["山登り (やまのぼり)", "山脈 (さんみゃく)"]
            },
            {
                kanji: "子",
                onReading: "シ",
                kunReading: "こ",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["子供 (こども)", "女子 (じょし)"]
            },
            {
                kanji: "四",
                onReading: "シ",
                kunReading: "よっ-つ",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["四月 (しがつ)", "四人 (よにん)"]
            },
            {
                kanji: "糸",
                onReading: "シ",
                kunReading: "いと",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["糸車 (いとぐるま)", "毛糸 (けいと)"]
            },
            {
                kanji: "字",
                onReading: "ジ",
                kunReading: "あざ",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["文字 (もじ)", "漢字 (かんじ)"]
            },
            {
                kanji: "耳",
                onReading: "ジ",
                kunReading: "みみ",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["耳鼻科 (じびか)", "耳鳴り (みみなり)"]
            },
            {
                kanji: "七",
                onReading: "シチ",
                kunReading: "なな-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["七月 (しちがつ)", "七人 (しちにん)"]
            },
            {
                kanji: "車",
                onReading: "シャ",
                kunReading: "くるま",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["車道 (しゃどう)", "電車 (でんしゃ)"]
            },
            {
                kanji: "手",
                onReading: "シュ",
                kunReading: "て",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["手紙 (てがみ)", "手術 (しゅじゅつ)"]
            },
            {
                kanji: "十",
                onReading: "ジュウ",
                kunReading: "とお",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["十月 (じゅうがつ)", "十人 (じゅうにん)"]
            },
            {
                kanji: "出",
                onReading: "シュツ",
                kunReading: "で-る",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["出口 (でぐち)", "出発 (しゅっぱつ)"]
            },
            {
                kanji: "女",
                onReading: "ジョ",
                kunReading: "おんな",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["女性 (じょせい)", "女王 (じょおう)"]
            },
            {
                kanji: "小",
                onReading: "ショウ",
                kunReading: "ちい-さい",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["小学校 (しょうがっこう)", "小説 (しょうせつ)"]
            },
            {
                kanji: "上",
                onReading: "ジョウ",
                kunReading: "うえ",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["上手 (じょうず)", "上昇 (じょうしょう)"]
            },
            {
                kanji: "森",
                onReading: "シン",
                kunReading: "もり",
                strokes: 12,
                grade: 1,
                session: 1,
                examples: ["森林 (しんりん)", "森閑 (しんかん)"]
            },
            {
                kanji: "人",
                onReading: "ジン",
                kunReading: "ひと",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["人口 (じんこう)", "人間 (にんげん)"]
            },
            {
                kanji: "水",
                onReading: "スイ",
                kunReading: "みず",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["水曜日 (すいようび)", "水泳 (すいえい)"]
            },
            {
                kanji: "正",
                onReading: "セイ",
                kunReading: "ただ-しい",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["正月 (しょうがつ)", "正直 (しょうじき)"]
            },
            {
                kanji: "生",
                onReading: "セイ",
                kunReading: "い-きる う-まれる は-える",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["生活 (せいかつ)", "生徒 (せいと)"]
            },
            {
                kanji: "青",
                onReading: "セイ",
                kunReading: "あお",
                strokes: 8,
                grade: 1,
                session: 1,
                examples: ["青空 (あおぞら)", "青春 (せいしゅん)"]
            },
            {
                kanji: "夕",
                onReading: "セキ",
                kunReading: "ゆう",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["夕方 (ゆうがた)", "夕食 (ゆうしょく)"]
            },
            {
                kanji: "石",
                onReading: "セキ",
                kunReading: "いし",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["石油 (せきゆ)", "石鹸 (せっけん)"]
            },
            {
                kanji: "赤",
                onReading: "セキ",
                kunReading: "あか",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["赤道 (せきどう)", "赤信号 (あかしんごう)"]
            },
            {
                kanji: "千",
                onReading: "セン",
                kunReading: "ち",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["千円 (せんえん)", "千年 (せんねん)"]
            },
            {
                kanji: "川",
                onReading: "セン",
                kunReading: "かわ",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["川岸 (かわぎし)", "川上 (かわかみ)"]
            },
            {
                kanji: "先",
                onReading: "セン",
                kunReading: "さき",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["先生 (せんせい)", "先週 (せんしゅう)"]
            },
            {
                kanji: "早",
                onReading: "ソウ",
                kunReading: "はや-い",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["早朝 (そうちょう)", "早速 (さっそく)"]
            },
            {
                kanji: "草",
                onReading: "ソウ",
                kunReading: "くさ",
                strokes: 9,
                grade: 1,
                session: 1,
                examples: ["草原 (そうげん)", "草木 (くさき)"]
            },
            {
                kanji: "足",
                onReading: "ソク",
                kunReading: "あし",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["足音 (あしおと)", "足元 (あしもと)"]
            },
            {
                kanji: "村",
                onReading: "ソン",
                kunReading: "むら",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["村長 (そんちょう)", "村人 (むらびと)"]
            },
            {
                kanji: "大",
                onReading: "ダイ",
                kunReading: "おお-きい",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["大学 (だいがく)", "大人 (おとな)"]
            },
            {
                kanji: "男",
                onReading: "ダン",
                kunReading: "おとこ",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["男性 (だんせい)", "男の子 (おとこのこ)"]
            },
            {
                kanji: "竹",
                onReading: "チク",
                kunReading: "たけ",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["竹林 (ちくりん)", "竹馬 (たけうま)"]
            },
            {
                kanji: "中",
                onReading: "チュウ",
                kunReading: "なか",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["中学校 (ちゅうがっこう)", "中心 (ちゅうしん)"]
            },
            {
                kanji: "虫",
                onReading: "チュウ",
                kunReading: "むし",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["虫歯 (むしば)", "昆虫 (こんちゅう)"]
            },
            {
                kanji: "町",
                onReading: "チョウ",
                kunReading: "まち",
                strokes: 7,
                grade: 1,
                session: 1,
                examples: ["町内 (ちょうない)", "町長 (ちょうちょう)"]
            },
            {
                kanji: "天",
                onReading: "テン",
                kunReading: "あま",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["天気 (てんき)", "天国 (てんごく)"]
            },
            {
                kanji: "田",
                onReading: "デン",
                kunReading: "た",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["田んぼ (たんぼ)", "田舎 (いなか)"]
            },
            {
                kanji: "土",
                onReading: "ド",
                kunReading: "つち",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["土曜日 (どようび)", "土壌 (どじょう)"]
            },
            {
                kanji: "二",
                onReading: "ニ",
                kunReading: "ふた-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["二月 (にがつ)", "二人 (ふたり)"]
            },
            {
                kanji: "日",
                onReading: "ニチ",
                kunReading: "ひ",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["日曜日 (にちようび)", "日本 (にほん)"]
            },
            {
                kanji: "入",
                onReading: "ニュウ",
                kunReading: "い-る",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["入口 (いりぐち)", "入学 (にゅうがく)"]
            },
            {
                kanji: "年",
                onReading: "ネン",
                kunReading: "とし",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["今年 (ことし)", "来年 (らいねん)"]
            },
            {
                kanji: "白",
                onReading: "ハク",
                kunReading: "しろ",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["白紙 (はくし)", "白鳥 (はくちょう)"]
            },
            {
                kanji: "八",
                onReading: "ハチ",
                kunReading: "やっ-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["八月 (はちがつ)", "八人 (はちにん)"]
            },
            {
                kanji: "百",
                onReading: "ヒャク",
                kunReading: "",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["百円 (ひゃくえん)", "百貨店 (ひゃっかてん)"]
            },
            {
                kanji: "文",
                onReading: "ブン",
                kunReading: "ふみ",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["文章 (ぶんしょう)", "文学 (ぶんがく)"]
            },
            {
                kanji: "木",
                onReading: "モク",
                kunReading: "き",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["木曜日 (もくようび)", "木材 (もくざい)"]
            },
            {
                kanji: "本",
                onReading: "ホン",
                kunReading: "もと",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["本棚 (ほんだな)", "本日 (ほんじつ)"]
            },
            {
                kanji: "名",
                onReading: "メイ",
                kunReading: "な",
                strokes: 6,
                grade: 1,
                session: 1,
                examples: ["名前 (なまえ)", "名刺 (めいし)"]
            },
            {
                kanji: "目",
                onReading: "モク",
                kunReading: "め",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["目標 (もくひょう)", "目的 (もくてき)"]
            },
            {
                kanji: "立",
                onReading: "リツ",
                kunReading: "た-つ",
                strokes: 5,
                grade: 1,
                session: 1,
                examples: ["立場 (たちば)", "立派 (りっぱ)"]
            },
            {
                kanji: "力",
                onReading: "リョク",
                kunReading: "ちから",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["力持ち (ちからもち)", "努力 (どりょく)"]
            },
            {
                kanji: "林",
                onReading: "リン",
                kunReading: "はやし",
                strokes: 8,
                grade: 1,
                session: 1,
                examples: ["森林 (しんりん)", "林業 (りんぎょう)"]
            },
            {
                kanji: "六",
                onReading: "ロク",
                kunReading: "むっ-つ",
                strokes: 4,
                grade: 1,
                session: 1,
                examples: ["六月 (ろくがつ)", "六人 (ろくにん)"]
            },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
            // 二年级汉字 (160字)
            {
                kanji: "引",
                onReading: "イン",
                kunReading: "ひ-く",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["引く (ひく)", "引用 (いんよう)"]
            },
            {
                kanji: "羽",
                onReading: "ウ",
                kunReading: "はね",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["羽根 (はね)", "羽毛 (うもう)"]
            },
            {
                kanji: "雲",
                onReading: "ウン",
                kunReading: "くも",
                strokes: 12,
                grade: 2,
                session: 1,
                examples: ["雲 (くも)", "入道雲 (にゅうどうぐも)"]
            },
            {
                kanji: "園",
                onReading: "エン",
                kunReading: "その",
                strokes: 13,
                grade: 2,
                session: 1,
                examples: ["公園 (こうえん)", "学園 (がくえん)"]
            },
            {
                kanji: "遠",
                onReading: "エン",
                kunReading: "とお-い",
                strokes: 13,
                grade: 2,
                session: 1,
                examples: ["遠い (とおい)", "遠足 (えんそく)"]
            },
            {
                kanji: "何",
                onReading: "カ",
                kunReading: "なに、なん",
                strokes: 7,
                grade: 2,
                session: 1,
                examples: ["何か (なにか)", "何時 (なんじ)"]
            },
            {
                kanji: "科",
                onReading: "カ",
                kunReading: "",
                strokes: 9,
                grade: 2,
                session: 1,
                examples: ["科学 (かがく)", "教科書 (きょうかしょ)"]
            },
            {
                kanji: "夏",
                onReading: "カ、ゲ",
                kunReading: "なつ",
                strokes: 10,
                grade: 2,
                session: 1,
                examples: ["夏休み (なつやすみ)", "夏季 (かき)"]
            },
            {
                kanji: "家",
                onReading: "カ、ケ",
                kunReading: "いえ、や",
                strokes: 10,
                grade: 2,
                session: 1,
                examples: ["家族 (かぞく)", "家庭 (かてい)"]
            },
            {
                kanji: "歌",
                onReading: "カ",
                kunReading: "うた、うた-う",
                strokes: 14,
                grade: 2,
                session: 1,
                examples: ["歌手 (かしゅ)", "歌う (うたう)"]
            },
            {
                kanji: "画",
                onReading: "ガ、カク",
                kunReading: "",
                strokes: 8,
                grade: 2,
                session: 1,
                examples: ["画面 (がめん)", "計画 (けいかく)"]
            },
            {
                kanji: "回",
                onReading: "カイ、エ",
                kunReading: "まわ-る、まわ-す",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["回転 (かいてん)", "一回 (いっかい)"]
            },
            {
                kanji: "会",
                onReading: "カイ、エ",
                kunReading: "あ-う",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["会議 (かいぎ)", "会社 (かいしゃ)"]
            },
            {
                kanji: "海",
                onReading: "カイ",
                kunReading: "うみ",
                strokes: 9,
                grade: 2,
                session: 1,
                examples: ["海岸 (かいがん)", "海水 (かいすい)"]
            },
            {
                kanji: "絵",
                onReading: "カイ、エ",
                kunReading: "",
                strokes: 12,
                grade: 2,
                session: 1,
                examples: ["絵本 (えほん)", "絵画 (かいが)"]
            },
            {
                kanji: "外",
                onReading: "ガイ、ゲ",
                kunReading: "そと、ほか、はず-す",
                strokes: 5,
                grade: 2,
                session: 1,
                examples: ["外国 (がいこく)", "外出 (がいしゅつ)"]
            },
            {
                kanji: "角",
                onReading: "カク",
                kunReading: "かど、つの",
                strokes: 7,
                grade: 2,
                session: 1,
                examples: ["角度 (かくど)", "三角 (さんかく)"]
            },
            {
                kanji: "楽",
                onReading: "ガク、ラク",
                kunReading: "たの-しい",
                strokes: 13,
                grade: 2,
                session: 1,
                examples: ["音楽 (おんがく)", "楽しい (たのしい)"]
            },
            {
                kanji: "活",
                onReading: "カツ",
                kunReading: "",
                strokes: 9,
                grade: 2,
                session: 1,
                examples: ["活動 (かつどう)", "生活 (せいかつ)"]
            },
            {
                kanji: "間",
                onReading: "カン、ケン",
                kunReading: "あいだ、ま",
                strokes: 12,
                grade: 2,
                session: 1,
                examples: ["時間 (じかん)", "人間 (にんげん)"]
            },
            {
                kanji: "丸",
                onReading: "ガン",
                kunReading: "まる、まる-める",
                strokes: 3,
                grade: 2,
                session: 1,
                examples: ["丸い (まるい)", "丸める (まるめる)"]
            },
            {
                kanji: "岩",
                onReading: "ガン",
                kunReading: "いわ",
                strokes: 8,
                grade: 2,
                session: 1,
                examples: ["岩石 (がんせき)", "岩山 (いわやま)"]
            },
            {
                kanji: "顔",
                onReading: "ガン",
                kunReading: "かお",
                strokes: 18,
                grade: 2,
                session: 1,
                examples: ["顔色 (かおいろ)", "笑顔 (えがお)"]
            },
            {
                kanji: "汽",
                onReading: "キ",
                kunReading: "",
                strokes: 7,
                grade: 2,
                session: 1,
                examples: ["汽車 (きしゃ)", "汽笛 (きてき)"]
            },
            {
                kanji: "記",
                onReading: "キ",
                kunReading: "しる-す",
                strokes: 10,
                grade: 2,
                session: 1,
                examples: ["記事 (きじ)", "記録 (きろく)"]
            },
            {
                kanji: "帰",
                onReading: "キ",
                kunReading: "かえ-る、かえ-す",
                strokes: 10,
                grade: 2,
                session: 1,
                examples: ["帰る (かえる)", "帰国 (きこく)"]
            },
            {
                kanji: "弓",
                onReading: "キュウ",
                kunReading: "ゆみ",
                strokes: 3,
                grade: 2,
                session: 1,
                examples: ["弓矢 (ゆみや)", "弓道 (きゅうどう)"]
            },
            {
                kanji: "牛",
                onReading: "ギュウ",
                kunReading: "うし",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["牛肉 (ぎゅうにく)", "牛乳 (ぎゅうにゅう)"]
            },
            {
                kanji: "魚",
                onReading: "ギョ",
                kunReading: "うお、さかな",
                strokes: 11,
                grade: 2,
                session: 1,
                examples: ["魚屋 (さかなや)", "金魚 (きんぎょ)"]
            },
            {
                kanji: "京",
                onReading: "キョウ、ケイ",
                kunReading: "",
                strokes: 8,
                grade: 2,
                session: 1,
                examples: ["東京 (とうきょう)", "京都 (きょうと)"]
            },
            {
                kanji: "強",
                onReading: "キョウ、ゴウ",
                kunReading: "つよ-い",
                strokes: 11,
                grade: 2,
                session: 1,
                examples: ["強い (つよい)", "強風 (きょうふう)"]
            },
            {
                kanji: "教",
                onReading: "キョウ",
                kunReading: "おし-える",
                strokes: 11,
                grade: 2,
                session: 1,
                examples: ["教室 (きょうしつ)", "教える (おしえる)"]
            },
            {
                kanji: "近",
                onReading: "キン",
                kunReading: "ちか-い",
                strokes: 7,
                grade: 2,
                session: 1,
                examples: ["近く (ちかく)", "最近 (さいきん)"]
            },
            {
                kanji: "兄",
                onReading: "ケイ、キョウ",
                kunReading: "あに",
                strokes: 5,
                grade: 2,
                session: 1,
                examples: ["兄弟 (きょうだい)", "お兄さん (おにいさん)"]
            },
            {
                kanji: "形",
                onReading: "ケイ、ギョウ",
                kunReading: "かたち",
                strokes: 7,
                grade: 2,
                session: 1,
                examples: ["形 (かたち)", "図形 (ずけい)"]
            },
            {
                kanji: "計",
                onReading: "ケイ",
                kunReading: "はか-る",
                strokes: 9,
                grade: 2,
                session: 1,
                examples: ["計算 (けいさん)", "時計 (とけい)"]
            },
            {
                kanji: "元",
                onReading: "ゲン、ガン",
                kunReading: "もと",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["元気 (げんき)", "元日 (がんじつ)"]
            },
            {
                kanji: "言",
                onReading: "ゲン、ゴン",
                kunReading: "い-う、こと",
                strokes: 7,
                grade: 2,
                session: 1,
                examples: ["言葉 (ことば)", "言う (いう)"]
            },
            {
                kanji: "原",
                onReading: "ゲン",
                kunReading: "はら",
                strokes: 10,
                grade: 2,
                session: 1,
                examples: ["原因 (げんいん)", "原っぱ (はらっぱ)"]
            },
            {
                kanji: "戸",
                onReading: "コ",
                kunReading: "と",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["戸口 (とぐち)", "戸籍 (こせき)"]
            },
            {
                kanji: "古",
                onReading: "コ",
                kunReading: "ふる-い",
                strokes: 5,
                grade: 2,
                session: 1,
                examples: ["古い (ふるい)", "古典 (こてん)"]
            },
            {
                kanji: "午",
                onReading: "ゴ",
                kunReading: "",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["午前 (ごぜん)", "正午 (しょうご)"]
            },
            {
                kanji: "後",
                onReading: "ゴ、コウ",
                kunReading: "のち、うし-ろ、あと",
                strokes: 9,
                grade: 2,
                session: 1,
                examples: ["後ろ (うしろ)", "午後 (ごご)"]
            },
            {
                kanji: "語",
                onReading: "ゴ",
                kunReading: "かた-る",
                strokes: 14,
                grade: 2,
                session: 1,
                examples: ["言語 (げんご)", "物語 (ものがたり)"]
            },
            {
                kanji: "工",
                onReading: "コウ、ク",
                kunReading: "",
                strokes: 3,
                grade: 2,
                session: 1,
                examples: ["工場 (こうじょう)", "工事 (こうじ)"]
            },
            {
                kanji: "公",
                onReading: "コウ",
                kunReading: "おおやけ",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["公園 (こうえん)", "公立 (こうりつ)"]
            },
            {
                kanji: "広",
                onReading: "コウ",
                kunReading: "ひろ-い、ひろ-がる",
                strokes: 5,
                grade: 2,
                session: 1,
                examples: ["広い (ひろい)", "広場 (ひろば)"]
            },
            {
                kanji: "交",
                onReading: "コウ",
                kunReading: "まじ-わる",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["交通 (こうつう)", "交差点 (こうさてん)"]
            },
            {
                kanji: "光",
                onReading: "コウ",
                kunReading: "ひか-る",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["光る (ひかる)", "日光 (にっこう)"]
            },
            {
                kanji: "考",
                onReading: "コウ",
                kunReading: "かんが-える",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["考える (かんがえる)", "思考 (しこう)"]
            },
            {
                kanji: "行",
                onReading: "コウ、ギョウ",
                kunReading: "い-く、おこな-う",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["行く (いく)", "旅行 (りょこう)"]
            },
            {
                kanji: "高",
                onReading: "コウ",
                kunReading: "たか-い",
                strokes: 10,
                grade: 2,
                session: 1,
                examples: ["高い (たかい)", "高校 (こうこう)"]
            },
            {
                kanji: "黄",
                onReading: "コウ、オウ",
                kunReading: "き、こ",
                strokes: 11,
                grade: 2,
                session: 1,
                examples: ["黄色 (きいろ)", "黄金 (おうごん)"]
            },
            {
                kanji: "合",
                onReading: "ゴウ、ガッ",
                kunReading: "あ-う、あ-わせる",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["合格 (ごうかく)", "試合 (しあい)"]
            },
            {
                kanji: "谷",
                onReading: "コク",
                kunReading: "たに",
                strokes: 7,
                grade: 2,
                session: 2,
                examples: ["谷間 (たにま)", "渓谷 (けいこく)"]
            },
            {
                kanji: "国",
                onReading: "コク",
                kunReading: "くに",
                strokes: 8,
                grade: 2,
                session: 2,
                examples: ["国語 (こくご)", "外国 (がいこく)"]
            },
            {
                kanji: "黒",
                onReading: "コク",
                kunReading: "くろ-い",
                strokes: 11,
                grade: 2,
                session: 2,
                examples: ["黒板 (こくばん)", "黒い (くろい)"]
            },
            {
                kanji: "今",
                onReading: "コン、キン",
                kunReading: "いま",
                strokes: 4,
                grade: 2,
                session: 2,
                examples: ["今日 (きょう)", "今年 (ことし)"]
            },
            {
                kanji: "才",
                onReading: "サイ",
                kunReading: "",
                strokes: 3,
                grade: 2,
                session: 2,
                examples: ["才能 (さいのう)", "天才 (てんさい)"]
            },
            {
                kanji: "細",
                onReading: "サイ",
                kunReading: "ほそ-い",
                strokes: 11,
                grade: 2,
                session: 2,
                examples: ["細い (ほそい)", "細工 (さいく)"]
            },
            {
                kanji: "作",
                onReading: "サク、サ",
                kunReading: "つく-る",
                strokes: 7,
                grade: 2,
                session: 2,
                examples: ["作文 (さくぶん)", "作る (つくる)"]
            },
            {
                kanji: "算",
                onReading: "サン",
                kunReading: "",
                strokes: 14,
                grade: 2,
                session: 2,
                examples: ["算数 (さんすう)", "計算 (けいさん)"]
            },
            {
                kanji: "止",
                onReading: "シ",
                kunReading: "と-まる、と-める",
                strokes: 4,
                grade: 2,
                session: 2,
                examples: ["止まる (とまる)", "中止 (ちゅうし)"]
            },
            {
                kanji: "市",
                onReading: "シ",
                kunReading: "いち",
                strokes: 5,
                grade: 2,
                session: 2,
                examples: ["市場 (いちば)", "都市 (とし)"]
            },
            {
                kanji: "矢",
                onReading: "シ",
                kunReading: "や",
                strokes: 5,
                grade: 2,
                session: 2,
                examples: ["矢印 (やじるし)", "弓矢 (ゆみや)"]
            },
            {
                kanji: "姉",
                onReading: "シ",
                kunReading: "あね",
                strokes: 8,
                grade: 2,
                session: 2,
                examples: ["姉妹 (しまい)", "お姉さん (おねえさん)"]
            },
            {
                kanji: "思",
                onReading: "シ",
                kunReading: "おも-う",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["思う (おもう)", "思い出 (おもいで)"]
            },
            {
                kanji: "紙",
                onReading: "シ",
                kunReading: "かみ",
                strokes: 10,
                grade: 2,
                session: 2,
                examples: ["紙 (かみ)", "手紙 (てがみ)"]
            },
            {
                kanji: "寺",
                onReading: "ジ",
                kunReading: "てら",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["寺院 (じいん)", "お寺 (おてら)"]
            },
            {
                kanji: "自",
                onReading: "ジ、シ",
                kunReading: "みずか-ら",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["自分 (じぶん)", "自動車 (じどうしゃ)"]
            },
            {
                kanji: "時",
                onReading: "ジ",
                kunReading: "とき",
                strokes: 10,
                grade: 2,
                session: 2,
                examples: ["時間 (じかん)", "時計 (とけい)"]
            },
            {
                kanji: "室",
                onReading: "シツ",
                kunReading: "むろ",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["教室 (きょうしつ)", "部室 (ぶしつ)"]
            },
            {
                kanji: "社",
                onReading: "シャ",
                kunReading: "やしろ",
                strokes: 7,
                grade: 2,
                session: 2,
                examples: ["会社 (かいしゃ)", "社長 (しゃちょう)"]
            },
            {
                kanji: "弱",
                onReading: "ジャク",
                kunReading: "よわ-い",
                strokes: 10,
                grade: 2,
                session: 2,
                examples: ["弱い (よわい)", "弱点 (じゃくてん)"]
            },
            {
                kanji: "首",
                onReading: "シュ",
                kunReading: "くび",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["首都 (しゅと)", "首 (くび)"]
            },
            {
                kanji: "秋",
                onReading: "シュウ",
                kunReading: "あき",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["秋分 (しゅうぶん)", "秋 (あき)"]
            },
            {
                kanji: "週",
                onReading: "シュウ",
                kunReading: "",
                strokes: 11,
                grade: 2,
                session: 2,
                examples: ["週間 (しゅうかん)", "今週 (こんしゅう)"]
            },
            {
                kanji: "春",
                onReading: "シュン",
                kunReading: "はる",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["春分 (しゅんぶん)", "春 (はる)"]
            },
            {
                kanji: "書",
                onReading: "ショ",
                kunReading: "か-く",
                strokes: 10,
                grade: 2,
                session: 2,
                examples: ["図書館 (としょかん)", "書く (かく)"]
            },
            {
                kanji: "少",
                onReading: "ショウ",
                kunReading: "すく-ない、すこ-し",
                strokes: 4,
                grade: 2,
                session: 2,
                examples: ["少年 (しょうねん)", "少ない (すくない)"]
            },
            {
                kanji: "場",
                onReading: "ジョウ",
                kunReading: "ば",
                strokes: 12,
                grade: 2,
                session: 2,
                examples: ["工場 (こうじょう)", "場所 (ばしょ)"]
            },
            {
                kanji: "色",
                onReading: "ショク、シキ",
                kunReading: "いろ",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["色 (いろ)", "色彩 (しきさい)"]
            },
            {
                kanji: "食",
                onReading: "ショク、ジキ",
                kunReading: "た-べる",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["食事 (しょくじ)", "食べる (たべる)"]
            },
            {
                kanji: "心",
                onReading: "シン",
                kunReading: "こころ",
                strokes: 4,
                grade: 2,
                session: 2,
                examples: ["心配 (しんぱい)", "心 (こころ)"]
            },
            {
                kanji: "新",
                onReading: "シン",
                kunReading: "あたら-しい",
                strokes: 13,
                grade: 2,
                session: 2,
                examples: ["新聞 (しんぶん)", "新しい (あたらしい)"]
            },
            {
                kanji: "親",
                onReading: "シン",
                kunReading: "おや、した-しい",
                strokes: 16,
                grade: 2,
                session: 2,
                examples: ["親子 (おやこ)", "親切 (しんせつ)"]
            },
            {
                kanji: "図",
                onReading: "ズ、ト",
                kunReading: "はか-る",
                strokes: 7,
                grade: 2,
                session: 2,
                examples: ["地図 (ちず)", "図書館 (としょかん)"]
            },
            {
                kanji: "数",
                onReading: "スウ、ス",
                kunReading: "かず、かぞ-える",
                strokes: 13,
                grade: 2,
                session: 2,
                examples: ["数学 (すうがく)", "数える (かぞえる)"]
            },
            {
                kanji: "西",
                onReading: "セイ、サイ",
                kunReading: "にし",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["西 (にし)", "西洋 (せいよう)"]
            },
            {
                kanji: "声",
                onReading: "セイ、ショウ",
                kunReading: "こえ",
                strokes: 7,
                grade: 2,
                session: 2,
                examples: ["声 (こえ)", "音声 (おんせい)"]
            },
            {
                kanji: "星",
                onReading: "セイ、ショウ",
                kunReading: "ほし",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["星 (ほし)", "惑星 (わくせい)"]
            },
            {
                kanji: "晴",
                onReading: "セイ",
                kunReading: "は-れる",
                strokes: 12,
                grade: 2,
                session: 2,
                examples: ["晴れる (はれる)", "晴天 (せいてん)"]
            },
            {
                kanji: "切",
                onReading: "セツ、サイ",
                kunReading: "き-る、き-れる",
                strokes: 4,
                grade: 2,
                session: 2,
                examples: ["切手 (きって)", "切る (きる)"]
            },
            {
                kanji: "雪",
                onReading: "セツ",
                kunReading: "ゆき",
                strokes: 11,
                grade: 2,
                session: 2,
                examples: ["雪 (ゆき)", "積雪 (せきせつ)"]
            },
            {
                kanji: "船",
                onReading: "セン",
                kunReading: "ふね",
                strokes: 11,
                grade: 2,
                session: 2,
                examples: ["船 (ふね)", "汽船 (きせん)"]
            },
            {
                kanji: "線",
                onReading: "セン",
                kunReading: "",
                strokes: 15,
                grade: 2,
                session: 2,
                examples: ["線路 (せんろ)", "電線 (でんせん)"]
            },
            {
                kanji: "前",
                onReading: "ゼン",
                kunReading: "まえ",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["前 (まえ)", "午前 (ごぜん)"]
            },
            {
                kanji: "組",
                onReading: "ソ",
                kunReading: "く-む",
                strokes: 11,
                grade: 2,
                session: 2,
                examples: ["組 (くみ)", "組合 (くみあい)"]
            },
            {
                kanji: "走",
                onReading: "ソウ",
                kunReading: "はし-る",
                strokes: 7,
                grade: 2,
                session: 2,
                examples: ["走る (はしる)", "走者 (そうしゃ)"]
            },
            {
                kanji: "多",
                onReading: "タ",
                kunReading: "おお-い",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["多い (おおい)", "多数 (たすう)"]
            },
            {
                kanji: "太",
                onReading: "タイ、タ",
                kunReading: "ふと-い",
                strokes: 4,
                grade: 2,
                session: 2,
                examples: ["太い (ふとい)", "太陽 (たいよう)"]
            },
            {
                kanji: "体",
                onReading: "タイ、テイ",
                kunReading: "からだ",
                strokes: 7,
                grade: 2,
                session: 2,
                examples: ["体育 (たいいく)", "体 (からだ)"]
            },
            {
                kanji: "台",
                onReading: "ダイ、タイ",
                kunReading: "",
                strokes: 5,
                grade: 2,
                session: 2,
                examples: ["台所 (だいどころ)", "台風 (たいふう)"]
            },
            {
                kanji: "地",
                onReading: "チ、ジ",
                kunReading: "",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["地図 (ちず)", "地球 (ちきゅう)"]
            },
            {
                kanji: "池",
                onReading: "チ",
                kunReading: "いけ",
                strokes: 6,
                grade: 2,
                session: 2,
                examples: ["池 (いけ)", "電池 (でんち)"]
            },
            {
                kanji: "知",
                onReading: "チ",
                kunReading: "し-る",
                strokes: 8,
                grade: 2,
                session: 3,
                examples: ["知る (しる)", "知識 (ちしき)"]
            },
            {
                kanji: "茶",
                onReading: "チャ、サ",
                kunReading: "",
                strokes: 9,
                grade: 2,
                session: 3,
                examples: ["お茶 (おちゃ)", "紅茶 (こうちゃ)"]
            },
            {
                kanji: "昼",
                onReading: "チュウ",
                kunReading: "ひる",
                strokes: 9,
                grade: 2,
                session: 3,
                examples: ["昼休み (ひるやすみ)", "昼間 (ひるま)"]
            },
            {
                kanji: "長",
                onReading: "チョウ",
                kunReading: "なが-い",
                strokes: 8,
                grade: 2,
                session: 3,
                examples: ["校長 (こうちょう)", "長い (ながい)"]
            },
            {
                kanji: "鳥",
                onReading: "チョウ",
                kunReading: "とり",
                strokes: 11,
                grade: 2,
                session: 3,
                examples: ["小鳥 (ことり)", "白鳥 (はくちょう)"]
            },
            {
                kanji: "朝",
                onReading: "チョウ",
                kunReading: "あさ",
                strokes: 12,
                grade: 2,
                session: 3,
                examples: ["朝食 (ちょうしょく)", "今朝 (けさ)"]
            },
            {
                kanji: "直",
                onReading: "チョク、ジキ",
                kunReading: "なお-す、なお-る",
                strokes: 8,
                grade: 2,
                session: 3,
                examples: ["直線 (ちょくせん)", "直る (なおる)"]
            },
            {
                kanji: "通",
                onReading: "ツウ、ツ",
                kunReading: "とお-る、かよ-う",
                strokes: 10,
                grade: 2,
                session: 3,
                examples: ["通学 (つうがく)", "交通 (こうつう)"]
            },
            {
                kanji: "弟",
                onReading: "テイ、ダイ",
                kunReading: "おとうと",
                strokes: 7,
                grade: 2,
                session: 3,
                examples: ["弟 (おとうと)", "兄弟 (きょうだい)"]
            },
            {
                kanji: "店",
                onReading: "テン",
                kunReading: "みせ",
                strokes: 8,
                grade: 2,
                session: 3,
                examples: ["店 (みせ)", "書店 (しょてん)"]
            },
            {
                kanji: "点",
                onReading: "テン",
                kunReading: "",
                strokes: 9,
                grade: 2,
                session: 3,
                examples: ["点数 (てんすう)", "満点 (まんてん)"]
            },
            {
                kanji: "電",
                onReading: "デン",
                kunReading: "",
                strokes: 13,
                grade: 2,
                session: 3,
                examples: ["電車 (でんしゃ)", "電話 (でんわ)"]
            },
            {
                kanji: "刀",
                onReading: "トウ",
                kunReading: "かたな",
                strokes: 2,
                grade: 2,
                session: 3,
                examples: ["刀 (かたな)", "包丁 (ほうちょう)"]
            },
            {
                kanji: "冬",
                onReading: "トウ",
                kunReading: "ふゆ",
                strokes: 5,
                grade: 2,
                session: 3,
                examples: ["冬休み (ふゆやすみ)", "冬季 (とうき)"]
            },
            {
                kanji: "当",
                onReading: "トウ",
                kunReading: "あ-たる",
                strokes: 6,
                grade: 2,
                session: 3,
                examples: ["当番 (とうばん)", "本当 (ほんとう)"]
            },
            {
                kanji: "東",
                onReading: "トウ",
                kunReading: "ひがし",
                strokes: 8,
                grade: 2,
                session: 3,
                examples: ["東京 (とうきょう)", "東口 (ひがしぐち)"]
            },
            {
                kanji: "答",
                onReading: "トウ",
                kunReading: "こた-える",
                strokes: 12,
                grade: 2,
                session: 3,
                examples: ["答え (こたえ)", "解答 (かいとう)"]
            },
            {
                kanji: "頭",
                onReading: "トウ、ズ",
                kunReading: "あたま",
                strokes: 16,
                grade: 2,
                session: 3,
                examples: ["頭 (あたま)", "先頭 (せんとう)"]
            },
            {
                kanji: "同",
                onReading: "ドウ",
                kunReading: "おな-じ",
                strokes: 6,
                grade: 2,
                session: 3,
                examples: ["同じ (おなじ)", "同級生 (どうきゅうせい)"]
            },
            {
                kanji: "道",
                onReading: "ドウ、トウ",
                kunReading: "みち",
                strokes: 12,
                grade: 2,
                session: 3,
                examples: ["道路 (どうろ)", "歩道 (ほどう)"]
            },
            {
                kanji: "読",
                onReading: "ドク、トク",
                kunReading: "よ-む",
                strokes: 14,
                grade: 2,
                session: 3,
                examples: ["読書 (どくしょ)", "読む (よむ)"]
            },
            {
                kanji: "内",
                onReading: "ナイ、ダイ",
                kunReading: "うち",
                strokes: 4,
                grade: 2,
                session: 3,
                examples: ["内側 (うちがわ)", "案内 (あんない)"]
            },
            {
                kanji: "南",
                onReading: "ナン、ナ",
                kunReading: "みなみ",
                strokes: 9,
                grade: 2,
                session: 3,
                examples: ["南口 (みなみぐち)", "南北 (なんぼく)"]
            },
            {
                kanji: "肉",
                onReading: "ニク",
                kunReading: "",
                strokes: 6,
                grade: 2,
                session: 3,
                examples: ["肉 (にく)", "牛肉 (ぎゅうにく)"]
            },
            {
                kanji: "馬",
                onReading: "バ",
                kunReading: "うま",
                strokes: 10,
                grade: 2,
                session: 3,
                examples: ["馬 (うま)", "競馬 (けいば)"]
            },
            {
                kanji: "売",
                onReading: "バイ",
                kunReading: "う-る、う-れる",
                strokes: 7,
                grade: 2,
                session: 4,
                examples: ["売る (うる)", "販売 (はんばい)"]
            },
            {
                kanji: "買",
                onReading: "バイ",
                kunReading: "か-う",
                strokes: 12,
                grade: 2,
                session: 4,
                examples: ["買う (かう)", "購買 (こうばい)"]
            },
            {
                kanji: "麦",
                onReading: "バク",
                kunReading: "むぎ",
                strokes: 7,
                grade: 2,
                session: 4,
                examples: ["麦 (むぎ)", "小麦 (こむぎ)"]
            },
            {
                kanji: "半",
                onReading: "ハン",
                kunReading: "なか-ば",
                strokes: 5,
                grade: 2,
                session: 4,
                examples: ["半分 (はんぶん)", "半年 (はんとし)"]
            },
            {
                kanji: "番",
                onReading: "バン",
                kunReading: "",
                strokes: 12,
                grade: 2,
                session: 4,
                examples: ["番号 (ばんごう)", "当番 (とうばん)"]
            },
            {
                kanji: "父",
                onReading: "フ",
                kunReading: "ちち",
                strokes: 4,
                grade: 2,
                session: 4,
                examples: ["父 (ちち)", "父親 (ちちおや)"]
            },
            {
                kanji: "風",
                onReading: "フウ、フ",
                kunReading: "かぜ",
                strokes: 9,
                grade: 2,
                session: 4,
                examples: ["風 (かぜ)", "台風 (たいふう)"]
            },
            {
                kanji: "分",
                onReading: "ブン、フン、ブ",
                kunReading: "わ-ける、わ-かる",
                strokes: 4,
                grade: 2,
                session: 4,
                examples: ["分ける (わける)", "自分 (じぶん)"]
            },
            {
                kanji: "聞",
                onReading: "ブン、モン",
                kunReading: "き-く、き-こえる",
                strokes: 14,
                grade: 2,
                session: 4,
                examples: ["聞く (きく)", "新聞 (しんぶん)"]
            },
            {
                kanji: "米",
                onReading: "ベイ、マイ",
                kunReading: "こめ",
                strokes: 6,
                grade: 2,
                session: 4,
                examples: ["米 (こめ)", "米国 (べいこく)"]
            },
                      
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           
            // 三年级汉字 (200字)
{
    kanji: "悪",
    onReading: "アク、オ",
    kunReading: "わる-い、あ-し",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["悪い (わるい)", "最悪 (さいあく)"]
},
{
    kanji: "安",
    onReading: "アン",
    kunReading: "やす-い",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["安全 (あんぜん)", "安い (やすい)"]
},
{
    kanji: "暗",
    onReading: "アン",
    kunReading: "くら-い",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["暗記 (あんき)", "暗い (くらい)"]
},
{
    kanji: "医",
    onReading: "イ",
    kunReading: "",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["医者 (いしゃ)", "医学 (いがく)"]
},
{
    kanji: "委",
    onReading: "イ",
    kunReading: "ゆだ-ねる",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["委員 (いいん)", "委託 (いたく)", "はんだんを委 (ゆだ)ねる。"]
},
{
    kanji: "意",
    onReading: "イ",
    kunReading: "",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["意味 (いみ)", "注意 (ちゅうい)"]
},
{
    kanji: "育",
    onReading: "イク",
    kunReading: "そだ-つ、そだ-てる",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["教育 (きょういく)", "育つ (そだつ)"]
},
{
    kanji: "員",
    onReading: "イン",
    kunReading: "",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["委員 (いいん)", "店員 (てんいん)"]
},
{
    kanji: "院",
    onReading: "イン",
    kunReading: "",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["病院 (びょういん)", "学院 (がくいん)"]
},
{
    kanji: "飲",
    onReading: "イン",
    kunReading: "の-む",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["飲食 (いんしょく)", "飲む (のむ)"]
},
{
    kanji: "運",
    onReading: "ウン",
    kunReading: "はこ-ぶ",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["運動 (うんどう)", "運ぶ (はこぶ)"]
},
{
    kanji: "泳",
    onReading: "エイ",
    kunReading: "およ-ぐ",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["水泳 (すいえい)", "泳ぐ (およぐ)"]
},
{
    kanji: "駅",
    onReading: "エキ",
    kunReading: "",
    strokes: 14,
    grade: 3,
    session: 3,
    examples: ["駅前 (えきまえ)", "駅長 (えきちょう)"]
},
{
    kanji: "央",
    onReading: "オウ",
    kunReading: "",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["中央 (ちゅうおう)", "中央線 (ちゅうおうせん)"]
},
{
    kanji: "横",
    onReading: "オウ",
    kunReading: "よこ",
    strokes: 15,
    grade: 3,
    session: 3,
    examples: ["横断 (おうだん)", "横書き (よこがき)"]
},
{
    kanji: "屋",
    onReading: "オク",
    kunReading: "や",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["本屋 (ほんや)", "八百屋 (やおや)"]
},
{
    kanji: "温",
    onReading: "オン",
    kunReading: "あたた-か、あたた-かい、あたた-める",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["温度 (おんど)", "温かい (あたたかい)"]
},
{
    kanji: "化",
    onReading: "カ、ケ",
    kunReading: "ば-ける、ば-かす",
    strokes: 4,
    grade: 3,
    session: 1,
    examples: ["化学 (かがく)", "変化 (へんか)"]
},
{
    kanji: "荷",
    onReading: "カ",
    kunReading: "に",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["荷物 (にもつ)", "重荷 (おもに)"]
},
{
    kanji: "界",
    onReading: "カイ",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["世界 (せかい)", "境界 (きょうかい)"]
},

  {
    kanji: "開",
    onReading: "カイ",
    kunReading: "ひら-く、ひら-ける、あ-く、あ-ける",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["開始 (かいし)", "開く (ひらく)"]
},
{
    kanji: "階",
    onReading: "カイ",
    kunReading: "",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["階段 (かいだん)", "二階 (にかい)"]
},
{
    kanji: "寒",
    onReading: "カン",
    kunReading: "さむ-い",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["寒気 (さむけ)", "寒い (さむい)"]
},
{
    kanji: "感",
    onReading: "カン",
    kunReading: "かん-じる",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["感情 (かんじょう)", "感じる (かんじる)"]
},
{
    kanji: "漢",
    onReading: "カン",
    kunReading: "",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["漢字 (かんじ)", "漢方 (かんぽう)"]
},
{
    kanji: "館",
    onReading: "カン",
    kunReading: "やかた",
    strokes: 16,
    grade: 3,
    session: 3,
    examples: ["図書館 (としょかん)", "美術館 (びじゅつかん)"]
},
{
    kanji: "岸",
    onReading: "ガン",
    kunReading: "きし",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["海岸 (かいがん)", "岸辺 (きしべ)"]
},
{
    kanji: "起",
    onReading: "キ",
    kunReading: "お-きる、お-こる、お-こす",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["起床 (きしょう)", "起きる (おきる)"]
},
{
    kanji: "期",
    onReading: "キ、ゴ",
    kunReading: "",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["期間 (きかん)", "学期 (がっき)"]
},
{
    kanji: "客",
    onReading: "キャク、カク",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["客人 (きゃくじん)", "観客 (かんきゃく)"]
},
{
    kanji: "究",
    onReading: "キュウ",
    kunReading: "きわ-める",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["研究 (けんきゅう)", "究明 (きゅうめい)"]
},
{
    kanji: "急",
    onReading: "キュウ",
    kunReading: "いそ-ぐ",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["急行 (きゅうこう)", "急ぐ (いそぐ)"]
},
{
    kanji: "級",
    onReading: "キュウ",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["学級 (がっきゅう)", "上級 (じょうきゅう)"]
},
{
    kanji: "宮",
    onReading: "キュウ、グウ",
    kunReading: "みや",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["宮殿 (きゅうでん)", "神宮 (じんぐう)"]
},
{
    kanji: "球",
    onReading: "キュウ",
    kunReading: "たま",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["地球 (ちきゅう)", "野球 (やきゅう)"]
},
{
    kanji: "去",
    onReading: "キョ、コ",
    kunReading: "さ-る",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["過去 (かこ)", "去年 (きょねん)"]
},
{
    kanji: "橋",
    onReading: "キョウ",
    kunReading: "はし",
    strokes: 16,
    grade: 3,
    session: 3,
    examples: ["橋渡し (はしわたし)", "鉄橋 (てっきょう)"]
},
{
    kanji: "業",
    onReading: "ギョウ、ゴウ",
    kunReading: "わざ",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["授業 (じゅぎょう)", "工業 (こうぎょう)"]
},
{
    kanji: "曲",
    onReading: "キョク",
    kunReading: "ま-がる、ま-げる",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["曲線 (きょくせん)", "曲がる (まがる)"]
},
{
    kanji: "局",
    onReading: "キョク",
    kunReading: "",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["局長 (きょくちょう)", "郵便局 (ゆうびんきょく)"]
},
  
  {
    kanji: "銀",
    onReading: "ギン",
    kunReading: "",
    strokes: 14,
    grade: 3,
    session: 3,
    examples: ["銀行 (ぎんこう)", "銀色 (ぎんいろ)"]
},
{
    kanji: "区",
    onReading: "ク",
    kunReading: "",
    strokes: 4,
    grade: 3,
    session: 1,
    examples: ["区役所 (くやくしょ)", "地区 (ちく)"]
},
{
    kanji: "苦",
    onReading: "ク",
    kunReading: "くる-しい、にが-い",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["苦労 (くろう)", "苦手 (にがて)"]
},
{
    kanji: "君",
    onReading: "クン",
    kunReading: "きみ",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["君主 (くんしゅ)", "君たち (きみたち)"]
},
{
    kanji: "係",
    onReading: "ケイ",
    kunReading: "かか-る、かかり",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["係り (かかり)", "関係 (かんけい)"]
},
{
    kanji: "軽",
    onReading: "ケイ",
    kunReading: "かる-い",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["軽い (かるい)", "軽量 (けいりょう)"]
},
{
    kanji: "血",
    onReading: "ケツ",
    kunReading: "ち",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["血液 (けつえき)", "出血 (しゅっけつ)"]
},
{
    kanji: "決",
    onReading: "ケツ",
    kunReading: "き-める、き-まる",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["決定 (けってい)", "決める (きめる)"]
},
{
    kanji: "研",
    onReading: "ケン",
    kunReading: "と-ぐ",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["研究 (けんきゅう)", "研修 (けんしゅう)"]
},
{
    kanji: "県",
    onReading: "ケン",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["県庁 (けんちょう)", "県立 (けんりつ)"]
},
{
    kanji: "庫",
    onReading: "コ、ク",
    kunReading: "",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["倉庫 (そうこ)", "車庫 (しゃこ)"]
},
{
    kanji: "湖",
    onReading: "コ",
    kunReading: "みずうみ",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["湖水 (こすい)", "琵琶湖 (びわこ)"]
},
{
    kanji: "向",
    onReading: "コウ",
    kunReading: "む-く、む-ける、む-かう",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["向かう (むかう)", "方向 (ほうこう)"]
},
{
    kanji: "幸",
    onReading: "コウ",
    kunReading: "さいわ-い、しあわ-せ",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["幸せ (しあわせ)", "幸運 (こううん)"]
},
{
    kanji: "港",
    onReading: "コウ",
    kunReading: "みなと",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["港町 (みなとまち)", "空港 (くうこう)"]
},
{
    kanji: "号",
    onReading: "ゴウ",
    kunReading: "",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["番号 (ばんごう)", "号車 (ごうしゃ)"]
},
{
    kanji: "根",
    onReading: "コン",
    kunReading: "ね",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["根本 (こんぽん)", "木の根 (きのね)"]
},
{
    kanji: "祭",
    onReading: "サイ",
    kunReading: "まつ-り",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["祭り (まつり)", "文化祭 (ぶんかさい)"]
},
{
    kanji: "皿",
    onReading: "ベイ",
    kunReading: "さら",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["皿洗い (さらあらい)", "小皿 (こざら)"]
},
  {
    kanji: "仕",
    onReading: "シ、ジ",
    kunReading: "つか-える",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["仕事 (しごと)", "奉仕 (ほうし)"]
},
{
    kanji: "死",
    onReading: "シ",
    kunReading: "し-ぬ",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["死亡 (しぼう)", "死ぬ (しぬ)"]
},
{
    kanji: "使",
    onReading: "シ",
    kunReading: "つか-う",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["使用 (しよう)", "使う (つかう)"]
},
{
    kanji: "始",
    onReading: "シ",
    kunReading: "はじ-める、はじ-まる",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["開始 (かいし)", "始める (はじめる)"]
},
{
    kanji: "指",
    onReading: "シ",
    kunReading: "ゆび、さ-す",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["指先 (ゆびさき)", "指示 (しじ)"]
},
{
    kanji: "歯",
    onReading: "シ",
    kunReading: "は",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["歯医者 (はいしゃ)", "歯ブラシ (はブラシ)"]
},
{
    kanji: "詩",
    onReading: "シ",
    kunReading: "",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["詩人 (しじん)", "詩集 (ししゅう)"]
},
{
    kanji: "次",
    onReading: "ジ",
    kunReading: "つぎ",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["次回 (じかい)", "次の (つぎの)"]
},
{
    kanji: "事",
    onReading: "ジ、ズ",
    kunReading: "こと",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["仕事 (しごと)", "事故 (じこ)"]
},
{
    kanji: "持",
    onReading: "ジ",
    kunReading: "も-つ",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["持つ (もつ)", "支持 (しじ)"]
},
{
    kanji: "式",
    onReading: "シキ",
    kunReading: "",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["式場 (しきじょう)", "形式 (けいしき)"]
},
{
    kanji: "実",
    onReading: "ジツ",
    kunReading: "み、みの-る",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["実際 (じっさい)", "果実 (かじつ)"]
},
{
    kanji: "写",
    onReading: "シャ",
    kunReading: "うつ-す、うつ-る",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["写真 (しゃしん)", "写す (うつす)"]
},
{
    kanji: "者",
    onReading: "シャ",
    kunReading: "もの",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["医者 (いしゃ)", "作者 (さくしゃ)"]
},
{
    kanji: "主",
    onReading: "シュ",
    kunReading: "おも、ぬし",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["主人 (しゅじん)", "主に (おもに)"]
},
{
    kanji: "守",
    onReading: "シュ",
    kunReading: "まも-る",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["守る (まもる)", "保守 (ほしゅ)"]
},
{
    kanji: "取",
    onReading: "シュ",
    kunReading: "と-る",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["取る (とる)", "取引 (とりひき)"]
},
{
    kanji: "酒",
    onReading: "シュ",
    kunReading: "さけ",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["日本酒 (にほんしゅ)", "お酒 (おさけ)"]
},
{
    kanji: "受",
    onReading: "ジュ",
    kunReading: "う-ける",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["受ける (うける)", "受付 (うけつけ)"]
},
{
    kanji: "州",
    onReading: "シュウ",
    kunReading: "",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["州都 (しゅうと)", "九州 (きゅうしゅう)"]
},
  {
    kanji: "拾",
    onReading: "シュウ、ジュウ",
    kunReading: "ひろ-う",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["拾う (ひろう)", "拾得 (しゅうとく)"]
},
{
    kanji: "終",
    onReading: "シュウ",
    kunReading: "お-わる、お-える",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["終了 (しゅうりょう)", "終わる (おわる)"]
},
{
    kanji: "習",
    onReading: "シュウ",
    kunReading: "なら-う",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["習慣 (しゅうかん)", "練習 (れんしゅう)"]
},
{
    kanji: "集",
    onReading: "シュウ",
    kunReading: "あつ-まる、あつ-める",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["集合 (しゅうごう)", "集める (あつめる)"]
},
{
    kanji: "住",
    onReading: "ジュウ",
    kunReading: "す-む、す-まう",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["住所 (じゅうしょ)", "住む (すむ)"]
},
{
    kanji: "重",
    onReading: "ジュウ、チョウ",
    kunReading: "おも-い、かさ-ねる",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["重要 (じゅうよう)", "重い (おもい)"]
},
{
    kanji: "宿",
    onReading: "シュク",
    kunReading: "やど",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["宿題 (しゅくだい)", "宿屋 (やどや)"]
},
{
    kanji: "所",
    onReading: "ショ",
    kunReading: "ところ",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["所在 (しょざい)", "住所 (じゅうしょ)"]
},
{
    kanji: "暑",
    onReading: "ショ",
    kunReading: "あつ-い",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["暑さ (あつさ)", "暑い (あつい)"]
},
{
    kanji: "助",
    onReading: "ジョ",
    kunReading: "たす-ける、たす-かる",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["助手 (じょしゅ)", "助ける (たすける)"]
},
{
    kanji: "昭",
    onReading: "ショウ",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["昭和 (しょうわ)", "昭明 (しょうめい)"]
},
{
    kanji: "消",
    onReading: "ショウ",
    kunReading: "き-える、け-す",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["消火 (しょうか)", "消す (けす)"]
},
{
    kanji: "商",
    onReading: "ショウ",
    kunReading: "あきな-う",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["商店 (しょうてん)", "商売 (しょうばい)"]
},
{
    kanji: "章",
    onReading: "ショウ",
    kunReading: "",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["文章 (ぶんしょう)", "章節 (しょうせつ)"]
},
{
    kanji: "勝",
    onReading: "ショウ",
    kunReading: "か-つ",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["勝利 (しょうり)", "勝つ (かつ)"]
},
{
    kanji: "乗",
    onReading: "ジョウ",
    kunReading: "の-る",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["乗車 (じょうしゃ)", "乗る (のる)"]
},
{
    kanji: "植",
    onReading: "ショク",
    kunReading: "う-える",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["植物 (しょくぶつ)", "植える (うえる)"]
},
{
    kanji: "申",
    onReading: "シン",
    kunReading: "もう-す",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["申請 (しんせい)", "申し上げる (もうしあげる)"]
},
{
    kanji: "身",
    onReading: "シン",
    kunReading: "み",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["身体 (しんたい)", "身長 (しんちょう)"]
},
{
    kanji: "神",
    onReading: "シン、ジン",
    kunReading: "かみ",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["神社 (じんじゃ)", "神様 (かみさま)"]
},
  {
    kanji: "真",
    onReading: "シン",
    kunReading: "ま",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["真実 (しんじつ)", "真夜中 (まよなか)"]
},
{
    kanji: "深",
    onReading: "シン",
    kunReading: "ふか-い",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["深い (ふかい)", "深夜 (しんや)"]
},
{
    kanji: "進",
    onReading: "シン",
    kunReading: "すす-む、すす-める",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["進学 (しんがく)", "進む (すすむ)"]
},
{
    kanji: "世",
    onReading: "セイ、セ",
    kunReading: "よ",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["世界 (せかい)", "世の中 (よのなか)"]
},
{
    kanji: "整",
    onReading: "セイ",
    kunReading: "ととの-える、ととの-う",
    strokes: 16,
    grade: 3,
    session: 3,
    examples: ["整理 (せいり)", "整える (ととのえる)"]
},
{
    kanji: "昔",
    onReading: "セキ、シャク",
    kunReading: "むかし",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["昔話 (むかしばなし)", "昔々 (むかしむかし)"]
},
{
    kanji: "全",
    onReading: "ゼン",
    kunReading: "まった-く",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["全部 (ぜんぶ)", "全国 (ぜんこく)"]
},
{
    kanji: "相",
    onReading: "ソウ、ショウ",
    kunReading: "あい",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["相手 (あいて)", "相談 (そうだん)"]
},
{
    kanji: "送",
    onReading: "ソウ",
    kunReading: "おく-る",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["送る (おくる)", "放送 (ほうそう)"]
},
{
    kanji: "想",
    onReading: "ソウ、ソ",
    kunReading: "",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["想像 (そうぞう)", "思想 (しそう)"]
},
{
    kanji: "息",
    onReading: "ソク",
    kunReading: "いき",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["息子 (むすこ)", "休息 (きゅうそく)"]
},
{
    kanji: "速",
    onReading: "ソク",
    kunReading: "はや-い、はや-める",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["速度 (そくど)", "速い (はやい)"]
},
{
    kanji: "族",
    onReading: "ゾク",
    kunReading: "",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["家族 (かぞく)", "民族 (みんぞく)"]
},
{
    kanji: "他",
    onReading: "タ",
    kunReading: "ほか",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["他人 (たにん)", "その他 (そのた)"]
},
{
    kanji: "打",
    onReading: "ダ",
    kunReading: "う-つ",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["打つ (うつ)", "打撃 (だげき)"]
},
{
    kanji: "対",
    onReading: "タイ、ツイ",
    kunReading: "",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["対話 (たいわ)", "対する (たいする)"]
},
{
    kanji: "待",
    onReading: "タイ",
    kunReading: "ま-つ",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["待つ (まつ)", "期待 (きたい)"]
},
{
    kanji: "代",
    onReading: "ダイ、タイ",
    kunReading: "か-わる、か-える",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["代表 (だいひょう)", "時代 (じだい)"]
},
{
    kanji: "第",
    onReading: "ダイ",
    kunReading: "",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["第一 (だいいち)", "第二 (だいに)"]
},
{
    kanji: "題",
    onReading: "ダイ",
    kunReading: "",
    strokes: 18,
    grade: 3,
    session: 3,
    examples: ["問題 (もんだい)", "課題 (かだい)"]
},
  {
    kanji: "炭",
    onReading: "タン",
    kunReading: "すみ",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["炭火 (すみび)", "石炭 (せきたん)"]
},
{
    kanji: "短",
    onReading: "タン",
    kunReading: "みじか-い",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["短い (みじかい)", "短所 (たんしょ)"]
},
{
    kanji: "談",
    onReading: "ダン",
    kunReading: "",
    strokes: 15,
    grade: 3,
    session: 3,
    examples: ["相談 (そうだん)", "談話 (だんわ)"]
},
{
    kanji: "着",
    onReading: "チャク",
    kunReading: "き-る、き-せる、つ-く",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["着物 (きもの)", "到着 (とうちゃく)"]
},
{
    kanji: "注",
    onReading: "チュウ",
    kunReading: "そそ-ぐ",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["注意 (ちゅうい)", "注目 (ちゅうもく)"]
},
{
    kanji: "柱",
    onReading: "チュウ",
    kunReading: "はしら",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["柱時計 (はしらどけい)", "電柱 (でんちゅう)"]
},
{
    kanji: "丁",
    onReading: "チョウ、テイ",
    kunReading: "",
    strokes: 2,
    grade: 3,
    session: 1,
    examples: ["丁寧 (ていねい)", "丁目 (ちょうめ)"]
},
{
    kanji: "帳",
    onReading: "チョウ",
    kunReading: "",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["帳面 (ちょうめん)", "手帳 (てちょう)"]
},
{
    kanji: "調",
    onReading: "チョウ",
    kunReading: "しら-べる、ととの-う",
    strokes: 15,
    grade: 3,
    session: 3,
    examples: ["調子 (ちょうし)", "調べる (しらべる)"]
},
{
    kanji: "追",
    onReading: "ツイ",
    kunReading: "お-う",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["追加 (ついか)", "追う (おう)"]
},
{
    kanji: "定",
    onReading: "テイ、ジョウ",
    kunReading: "さだ-める、さだ-まる",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["定期 (ていき)", "決定 (けってい)"]
},
{
    kanji: "笛",
    onReading: "テキ",
    kunReading: "ふえ",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["笛吹き (ふえふき)", "横笛 (よこぶえ)"]
},
{
    kanji: "鉄",
    onReading: "テツ",
    kunReading: "",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["鉄道 (てつどう)", "鉄橋 (てっきょう)"]
},
{
    kanji: "転",
    onReading: "テン",
    kunReading: "ころ-がる、ころ-げる",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["転校 (てんこう)", "回転 (かいてん)"]
},
{
    kanji: "都",
    onReading: "ト、ツ",
    kunReading: "みやこ",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["都市 (とし)", "首都 (しゅと)"]
},
{
    kanji: "度",
    onReading: "ド、ト",
    kunReading: "たび",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["温度 (おんど)", "今度 (こんど)"]
},
{
    kanji: "投",
    onReading: "トウ",
    kunReading: "な-げる",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["投手 (とうしゅ)", "投げる (なげる)"]
},
{
    kanji: "豆",
    onReading: "トウ、ズ",
    kunReading: "まめ",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["豆腐 (とうふ)", "大豆 (だいず)"]
},
{
    kanji: "島",
    onReading: "トウ",
    kunReading: "しま",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["島国 (しまぐに)", "半島 (はんとう)"]
},
{
    kanji: "湯",
    onReading: "トウ",
    kunReading: "ゆ",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["風呂湯 (ふろゆ)", "熱湯 (ねっとう)"]
},
{
    kanji: "登",
    onReading: "トウ、ト",
    kunReading: "のぼ-る",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["登山 (とざん)", "登校 (とうこう)"]
},
{
    kanji: "等",
    onReading: "トウ",
    kunReading: "ひと-しい",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["平等 (びょうどう)", "等しい (ひとしい)"]
},
{
    kanji: "動",
    onReading: "ドウ",
    kunReading: "うご-く、うご-かす",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["運動 (うんどう)", "動く (うごく)"]
},
{
    kanji: "童",
    onReading: "ドウ",
    kunReading: "わらべ",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["児童 (じどう)", "童話 (どうわ)"]
},
{
    kanji: "農",
    onReading: "ノウ",
    kunReading: "",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["農業 (のうぎょう)", "農家 (のうか)"]
},
{
    kanji: "波",
    onReading: "ハ",
    kunReading: "なみ",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["波浪 (はろう)", "電波 (でんぱ)"]
},
{
    kanji: "配",
    onReading: "ハイ",
    kunReading: "くば-る",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["配達 (はいたつ)", "配る (くばる)"]
},
{
    kanji: "倍",
    onReading: "バイ",
    kunReading: "",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["倍数 (ばいすう)", "二倍 (にばい)"]
},
{
    kanji: "箱",
    onReading: "ソウ",
    kunReading: "はこ",
    strokes: 15,
    grade: 3,
    session: 3,
    examples: ["箱根 (はこね)", "郵便箱 (ゆうびんばこ)"]
},
{
    kanji: "畑",
    onReading: "",
    kunReading: "はた、はたけ",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["畑作 (はたさく)", "田畑 (たはた)"]
},
{
    kanji: "発",
    onReading: "ハツ、ホツ",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["発見 (はっけん)", "出発 (しゅっぱつ)"]
},
{
    kanji: "反",
    onReading: "ハン、タン",
    kunReading: "そ-る、そ-らす",
    strokes: 4,
    grade: 3,
    session: 1,
    examples: ["反対 (はんたい)", "反応 (はんのう)"]
},
{
    kanji: "坂",
    onReading: "ハン",
    kunReading: "さか",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["坂道 (さかみち)", "下り坂 (くだりざか)"]
},
{
    kanji: "板",
    onReading: "ハン、バン",
    kunReading: "いた",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["黒板 (こくばん)", "看板 (かんばん)"]
},
{
    kanji: "皮",
    onReading: "ヒ",
    kunReading: "かわ",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["皮膚 (ひふ)", "革皮 (かわかわ)"]
},
{
    kanji: "悲",
    onReading: "ヒ",
    kunReading: "かな-しい",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["悲しい (かなしい)", "悲劇 (ひげき)"]
},
{
    kanji: "美",
    onReading: "ビ、ミ",
    kunReading: "うつく-しい",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["美しい (うつくしい)", "美術 (びじゅつ)"]
},
{
    kanji: "鼻",
    onReading: "ビ",
    kunReading: "はな",
    strokes: 14,
    grade: 3,
    session: 3,
    examples: ["鼻水 (はなみず)", "象鼻 (ぞうび)"]
},
{
    kanji: "筆",
    onReading: "ヒツ",
    kunReading: "ふで",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["筆箱 (ふでばこ)", "鉛筆 (えんぴつ)"]
},
{
    kanji: "氷",
    onReading: "ヒョウ",
    kunReading: "こおり",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["氷山 (ひょうざん)", "製氷 (せいひょう)"]
},
{
    kanji: "表",
    onReading: "ヒョウ",
    kunReading: "おもて、あらわ-す",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["表面 (ひょうめん)", "発表 (はっぴょう)"]
},
{
    kanji: "秒",
    onReading: "ビョウ",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["秒針 (びょうしん)", "分秒 (ふんびょう)"]
},
{
    kanji: "病",
    onReading: "ビョウ、ヘイ",
    kunReading: "やまい、や-む",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["病院 (びょういん)", "病気 (びょうき)"]
},
{
    kanji: "品",
    onReading: "ヒン",
    kunReading: "しな",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["品物 (しなもの)", "商品 (しょうひん)"]
},
{
    kanji: "負",
    onReading: "フ",
    kunReading: "ま-ける、ま-かす、お-う",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["負ける (まける)", "勝負 (しょうぶ)"]
},
{
    kanji: "部",
    onReading: "ブ",
    kunReading: "",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["部屋 (へや)", "全部 (ぜんぶ)"]
},
{
    kanji: "服",
    onReading: "フク",
    kunReading: "",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["服装 (ふくそう)", "洋服 (ようふく)"]
},
{
    kanji: "福",
    onReading: "フク",
    kunReading: "",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["幸福 (こうふく)", "福祉 (ふくし)"]
},
{
    kanji: "物",
    onReading: "ブツ、モツ",
    kunReading: "もの",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["物語 (ものがたり)", "動物 (どうぶつ)"]
},
{
    kanji: "平",
    onReading: "ヘイ、ビョウ",
    kunReading: "たい-ら、ひら",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["平和 (へいわ)", "平日 (へいじつ)"]
},
{
    kanji: "返",
    onReading: "ヘン",
    kunReading: "かえ-す、かえ-る",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["返事 (へんじ)", "帰返す (かえす)"]
},
{
    kanji: "勉",
    onReading: "ベン",
    kunReading: "",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["勉強 (べんきょう)", "勉める (つとめる)"]
},
{
    kanji: "放",
    onReading: "ホウ",
    kunReading: "はな-す、はな-つ",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["放送 (ほうそう)", "解放 (かいほう)"]
},
{
    kanji: "味",
    onReading: "ミ",
    kunReading: "あじ、あじ-わう",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["味方 (みかた)", "意味 (いみ)"]
},
{
    kanji: "命",
    onReading: "メイ、ミョウ",
    kunReading: "いのち",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["命令 (めいれい)", "生命 (せいめい)"]
},
{
    kanji: "面",
    onReading: "メン",
    kunReading: "おも、おもて",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["面白い (おもしろい)", "表面 (ひょうめん)"]
},
{
    kanji: "問",
    onReading: "モン",
    kunReading: "と-う",
    strokes: 11,
    grade: 3,
    session: 3,
    examples: ["問題 (もんだい)", "質問 (しつもん)"]
},
{
    kanji: "役",
    onReading: "ヤク、エキ",
    kunReading: "",
    strokes: 7,
    grade: 3,
    session: 2,
    examples: ["役所 (やくしょ)", "役割 (やくわり)"]
},
{
    kanji: "薬",
    onReading: "ヤク",
    kunReading: "くすり",
    strokes: 16,
    grade: 3,
    session: 3,
    examples: ["薬局 (やっきょく)", "薬品 (やくひん)"]
},
{
    kanji: "由",
    onReading: "ユ、ユウ",
    kunReading: "よし",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["理由 (りゆう)", "自由 (じゆう)"]
},
{
    kanji: "油",
    onReading: "ユ",
    kunReading: "あぶら",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["油分 (ゆぶん)", "石油 (せきゆ)"]
},
{
    kanji: "有",
    onReading: "ユウ、ウ",
    kunReading: "あ-る",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["有名 (ゆうめい)", "所有 (しょゆう)"]
},
{
    kanji: "遊",
    onReading: "ユウ",
    kunReading: "あそ-ぶ",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["遊園地 (ゆうえんち)", "遊ぶ (あそぶ)"]
},
{
    kanji: "予",
    onReading: "ヨ",
    kunReading: "あらかじ-め",
    strokes: 4,
    grade: 3,
    session: 1,
    examples: ["予定 (よてい)", "予習 (よしゅう)"]
},
{
    kanji: "羊",
    onReading: "ヨウ",
    kunReading: "ひつじ",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["羊毛 (ようもう)", "子羊 (こひつじ)"]
},
{
    kanji: "洋",
    onReading: "ヨウ",
    kunReading: "",
    strokes: 9,
    grade: 3,
    session: 2,
    examples: ["洋服 (ようふく)", "西洋 (せいよう)"]
},
{
    kanji: "葉",
    onReading: "ヨウ",
    kunReading: "は",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["葉書 (はがき)", "木の葉 (このは)"]
},
{
    kanji: "陽",
    onReading: "ヨウ",
    kunReading: "ひ",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["太陽 (たいよう)", "陽気 (ようき)"]
},
{
    kanji: "様",
    onReading: "ヨウ",
    kunReading: "さま",
    strokes: 14,
    grade: 3,
    session: 3,
    examples: ["様子 (ようす)", "皆様 (みなさま)"]
},
{
    kanji: "落",
    onReading: "ラク",
    kunReading: "お-ちる、お-とす",
    strokes: 12,
    grade: 3,
    session: 3,
    examples: ["落ち葉 (おちば)", "落第 (らくだい)"]
},
{
    kanji: "流",
    onReading: "リュウ、ル",
    kunReading: "なが-れる、なが-す",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["流れ (ながれ)", "交流 (こうりゅう)"]
},
{
    kanji: "旅",
    onReading: "リョ",
    kunReading: "たび",
    strokes: 10,
    grade: 3,
    session: 3,
    examples: ["旅行 (りょこう)", "旅人 (たびびと)"]
},
{
    kanji: "両",
    onReading: "リョウ",
    kunReading: "てる",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["両親 (りょうしん)", "両手 (りょうて)"]
},
{
    kanji: "緑",
    onReading: "リョク、ロク",
    kunReading: "みどり",
    strokes: 14,
    grade: 3,
    session: 3,
    examples: ["緑色 (みどりいろ)", "新緑 (しんりょく)"]
},
{
    kanji: "礼",
    onReading: "レイ、ライ",
    kunReading: "",
    strokes: 5,
    grade: 3,
    session: 2,
    examples: ["礼儀 (れいぎ)", "失礼 (しつれい)"]
},
{
    kanji: "列",
    onReading: "レツ",
    kunReading: "",
    strokes: 6,
    grade: 3,
    session: 2,
    examples: ["列車 (れっしゃ)", "整列 (せいれつ)"]
},
{
    kanji: "練",
    onReading: "レン",
    kunReading: "ね-る",
    strokes: 14,
    grade: 3,
    session: 3,
    examples: ["練習 (れんしゅう)", "訓練 (くんれん)"]
},
{
    kanji: "路",
    onReading: "ロ",
    kunReading: "じ",
    strokes: 13,
    grade: 3,
    session: 3,
    examples: ["道路 (どうろ)", "線路 (せんろ)"]
},
{
    kanji: "和",
    onReading: "ワ、オ",
    kunReading: "やわ-らぐ、なご-む",
    strokes: 8,
    grade: 3,
    session: 2,
    examples: ["平和 (へいわ)", "和風 (わふう)"]
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
//四年级汉字
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
{
    kanji: "愛",
    onReading: "アイ",
    kunReading: "いと-しい",
    strokes: 13,
    grade: 4,
    session: 1,
    examples: ["愛情 (あいじょう)", "愛する (あいする)"]
},
{
    kanji: "案",
    onReading: "アン",
    kunReading: "",
    strokes: 10,
    grade: 4,
    session: 1,
    examples: ["案内 (あんない)", "提案 (ていあん)"]
},
{
    kanji: "以",
    onReading: "イ",
    kunReading: "もっ-て",
    strokes: 5,
    grade: 4,
    session: 1,
    examples: ["以上 (いじょう)", "以下 (いか)"]
},
{
    kanji: "衣",
    onReading: "イ",
    kunReading: "ころも",
    strokes: 6,
    grade: 4,
    session: 1,
    examples: ["衣服 (いふく)", "着衣 (ちゃくい)"]
},
{
    kanji: "位",
    onReading: "イ",
    kunReading: "くらい",
    strokes: 7,
    grade: 4,
    session: 1,
    examples: ["位置 (いち)", "順位 (じゅんい)"]
},
{
    kanji: "囲",
    onReading: "イ",
    kunReading: "かこ-む",
    strokes: 7,
    grade: 4,
    session: 1,
    examples: ["囲む (かこむ)", "周囲 (しゅうい)"]
},
{
    kanji: "胃",
    onReading: "イ",
    kunReading: "",
    strokes: 9,
    grade: 4,
    session: 1,
    examples: ["胃腸 (いちょう)", "胃痛 (いつう)"]
},
{
    kanji: "印",
    onReading: "イン",
    kunReading: "しるし",
    strokes: 6,
    grade: 4,
    session: 1,
    examples: ["印鑑 (いんかん)", "印象 (いんしょう)"]
},
{
    kanji: "英",
    onReading: "エイ",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["英語 (えいご)", "英雄 (えいゆう)"]
},
{
    kanji: "栄",
    onReading: "エイ",
    kunReading: "さか-える",
    strokes: 9,
    grade: 4,
    session: 1,
    examples: ["栄養 (えいよう)", "繁栄 (はんえい)"]
},
{
    kanji: "塩",
    onReading: "エン",
    kunReading: "しお",
    strokes: 13,
    grade: 4,
    session: 1,
    examples: ["食塩 (しょくえん)", "塩味 (しおあじ)"]
},
{
    kanji: "億",
    onReading: "オク",
    kunReading: "",
    strokes: 15,
    grade: 4,
    session: 1,
    examples: ["億円 (おくえん)", "十億 (じゅうおく)"]
},
{
    kanji: "加",
    onReading: "カ",
    kunReading: "くわ-える",
    strokes: 5,
    grade: 4,
    session: 1,
    examples: ["追加 (ついか)", "加える (くわえる)"]
},
{
    kanji: "果",
    onReading: "カ",
    kunReading: "は-たす",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["果物 (くだもの)", "効果 (こうか)"]
},
{
    kanji: "貨",
    onReading: "カ",
    kunReading: "",
    strokes: 11,
    grade: 4,
    session: 1,
    examples: ["貨物 (かもつ)", "通貨 (つうか)"]
},
{
    kanji: "課",
    onReading: "カ",
    kunReading: "",
    strokes: 15,
    grade: 4,
    session: 1,
    examples: ["課題 (かだい)", "課長 (かちょう)"]
},
{
    kanji: "芽",
    onReading: "ガ",
    kunReading: "め",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["芽生え (めばえ)", "新芽 (しんめ)"]
},
{
    kanji: "改",
    onReading: "カイ",
    kunReading: "あらた-める",
    strokes: 7,
    grade: 4,
    session: 1,
    examples: ["改正 (かいせい)", "改める (あらためる)"]
},
{
    kanji: "械",
    onReading: "カイ",
    kunReading: "",
    strokes: 11,
    grade: 4,
    session: 1,
    examples: ["機械 (きかい)", "機械的 (きかいてき)"]
},
{
    kanji: "害",
    onReading: "ガイ",
    kunReading: "",
    strokes: 10,
    grade: 4,
    session: 1,
    examples: ["害虫 (がいちゅう)", "被害 (ひがい)"]
},
{
    kanji: "街",
    onReading: "ガイ、カイ",
    kunReading: "まち",
    strokes: 12,
    grade: 4,
    session: 1,
    examples: ["街道 (かいどう)", "商店街 (しょうてんがい)"]
},
{
    kanji: "各",
    onReading: "カク",
    kunReading: "おのおの",
    strokes: 6,
    grade: 4,
    session: 1,
    examples: ["各自 (かくじ)", "各種 (かくしゅ)"]
},
{
    kanji: "覚",
    onReading: "カク",
    kunReading: "おぼ-える",
    strokes: 12,
    grade: 4,
    session: 1,
    examples: ["覚える (おぼえる)", "自覚 (じかく)"]
},
{
    kanji: "完",
    onReading: "カン",
    kunReading: "",
    strokes: 7,
    grade: 4,
    session: 1,
    examples: ["完成 (かんせい)", "完全 (かんぜん)"]
},
{
    kanji: "官",
    onReading: "カン",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["官庁 (かんちょう)", "公官 (こうかん)"]
},
{
    kanji: "管",
    onReading: "カン",
    kunReading: "くだ",
    strokes: 14,
    grade: 4,
    session: 1,
    examples: ["管理 (かんり)", "配管 (はいかん)"]
},
{
    kanji: "関",
    onReading: "カン",
    kunReading: "せき、かか-わる",
    strokes: 14,
    grade: 4,
    session: 1,
    examples: ["関係 (かんけい)", "関する (かんする)"]
},
{
    kanji: "観",
    onReading: "カン",
    kunReading: "",
    strokes: 18,
    grade: 4,
    session: 1,
    examples: ["観察 (かんさつ)", "観光 (かんこう)"]
},
{
    kanji: "願",
    onReading: "ガン",
    kunReading: "ねが-う",
    strokes: 19,
    grade: 4,
    session: 1,
    examples: ["願い (ねがい)", "願書 (がんしょ)"]
},
{
    kanji: "希",
    onReading: "キ",
    kunReading: "",
    strokes: 7,
    grade: 4,
    session: 1,
    examples: ["希望 (きぼう)", "希少 (きしょう)"]
},
{
    kanji: "季",
    onReading: "キ",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["季節 (きせつ)", "四季 (しき)"]
},
{
    kanji: "紀",
    onReading: "キ",
    kunReading: "",
    strokes: 9,
    grade: 4,
    session: 1,
    examples: ["紀元 (きげん)", "世紀 (せいき)"]
},
{
    kanji: "喜",
    onReading: "キ",
    kunReading: "よろこ-ぶ",
    strokes: 12,
    grade: 4,
    session: 1,
    examples: ["喜ぶ (よろこぶ)", "歓喜 (かんき)"]
},
{
    kanji: "旗",
    onReading: "キ",
    kunReading: "はた",
    strokes: 14,
    grade: 4,
    session: 1,
    examples: ["国旗 (こっき)", "旗竿 (はたざお)"]
},
{
    kanji: "器",
    onReading: "キ",
    kunReading: "うつわ",
    strokes: 15,
    grade: 4,
    session: 1,
    examples: ["器具 (きぐ)", "食器 (しょっき)"]
},
{
    kanji: "機",
    onReading: "キ",
    kunReading: "はた",
    strokes: 16,
    grade: 4,
    session: 1,
    examples: ["機会 (きかい)", "機械 (きかい)"]
},
{
    kanji: "議",
    onReading: "ギ",
    kunReading: "",
    strokes: 20,
    grade: 4,
    session: 1,
    examples: ["議論 (ぎろん)", "会議 (かいぎ)"]
},
{
    kanji: "求",
    onReading: "キュウ",
    kunReading: "もと-める",
    strokes: 7,
    grade: 4,
    session: 1,
    examples: ["要求 (ようきゅう)", "求める (もとめる)"]
},
{
    kanji: "泣",
    onReading: "キュウ",
    kunReading: "な-く",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["泣く (なく)", "号泣 (ごうきゅう)"]
},
{
    kanji: "救",
    onReading: "キュウ",
    kunReading: "すく-う",
    strokes: 11,
    grade: 4,
    session: 1,
    examples: ["救助 (きゅうじょ)", "救う (すくう)"]
},
{
    kanji: "給",
    onReading: "キュウ",
    kunReading: "",
    strokes: 12,
    grade: 4,
    session: 1,
    examples: ["給料 (きゅうりょう)", "供給 (きょうきゅう)"]
},
{
    kanji: "挙",
    onReading: "キョ",
    kunReading: "あ-げる",
    strokes: 10,
    grade: 4,
    session: 1,
    examples: ["挙手 (きょしゅ)", "選挙 (せんきょ)"]
},
{
    kanji: "漁",
    onReading: "ギョ、リョウ",
    kunReading: "",
    strokes: 14,
    grade: 4,
    session: 1,
    examples: ["漁業 (ぎょぎょう)", "漁師 (りょうし)"]
},
{
    kanji: "共",
    onReading: "キョウ",
    kunReading: "とも",
    strokes: 6,
    grade: 4,
    session: 1,
    examples: ["共同 (きょうどう)", "共に (ともに)"]
},
{
    kanji: "協",
    onReading: "キョウ",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["協力 (きょうりょく)", "協会 (きょうかい)"]
},
{
    kanji: "鏡",
    onReading: "キョウ",
    kunReading: "かがみ",
    strokes: 19,
    grade: 4,
    session: 1,
    examples: ["鏡台 (きょうだい)", "望遠鏡 (ぼうえんきょう)"]
},
{
    kanji: "競",
    onReading: "キョウ、ケイ",
    kunReading: "きそ-う",
    strokes: 20,
    grade: 4,
    session: 1,
    examples: ["競争 (きょうそう)", "競技 (きょうぎ)"]
},
{
    kanji: "極",
    onReading: "キョク、ゴク",
    kunReading: "きわ-める",
    strokes: 12,
    grade: 4,
    session: 1,
    examples: ["極端 (きょくたん)", "南極 (なんきょく)"]
},
{
    kanji: "訓",
    onReading: "クン",
    kunReading: "",
    strokes: 10,
    grade: 4,
    session: 1,
    examples: ["訓練 (くんれん)", "教訓 (きょうくん)"]
},
{
    kanji: "軍",
    onReading: "グン",
    kunReading: "",
    strokes: 9,
    grade: 4,
    session: 1,
    examples: ["軍隊 (ぐんたい)", "海軍 (かいぐん)"]
},
{
    kanji: "郡",
    onReading: "グン",
    kunReading: "",
    strokes: 10,
    grade: 4,
    session: 1,
    examples: ["郡部 (ぐんぶ)", "郡長 (ぐんちょう)"]
},
{
    kanji: "径",
    onReading: "ケイ",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 1,
    examples: ["直径 (ちょっけい)", "経路 (けいろ)"]
},
{
    kanji: "型",
    onReading: "ケイ",
    kunReading: "かた",
    strokes: 9,
    grade: 4,
    session: 1,
    examples: ["型紙 (かたがみ)", "模型 (もけい)"]
},

    

    {
        kanji: "芸",
        onReading: "ゲイ",
        kunReading: "",
        strokes: 7,
        grade: 4,
        session: 2,
        examples: ["芸術 (げいじゅつ)", "芸能 (げいのう)"]
    },
    {
        kanji: "欠",
        onReading: "ケツ",
        kunReading: "か-ける",
        strokes: 4,
        grade: 4,
        session: 2,
        examples: ["欠席 (けっせき)", "欠点 (けってん)"]
    },
    {
        kanji: "結",
        onReading: "ケツ",
        kunReading: "むす-ぶ",
        strokes: 12,
        grade: 4,
        session: 2,
        examples: ["結果 (けっか)", "結ぶ (むすぶ)"]
    },
    {
        kanji: "建",
        onReading: "ケン",
        kunReading: "た-てる",
        strokes: 9,
        grade: 4,
        session: 2,
        examples: ["建設 (けんせつ)", "建物 (たてもの)"]
    },
    {
        kanji: "健",
        onReading: "ケン",
        kunReading: "すこやか",
        strokes: 11,
        grade: 4,
        session: 2,
        examples: ["健康 (けんこう)", "健全 (けんぜん)"]
    },
    {
        kanji: "験",
        onReading: "ケン",
        kunReading: "",
        strokes: 18,
        grade: 4,
        session: 2,
        examples: ["試験 (しけん)", "経験 (けいけん)"]
    },
    {
        kanji: "固",
        onReading: "コ",
        kunReading: "かた-い",
        strokes: 8,
        grade: 4,
        session: 2,
        examples: ["固定 (こてい)", "固い (かたい)"]
    },
    {
        kanji: "功",
        onReading: "コウ",
        kunReading: "",
        strokes: 5,
        grade: 4,
        session: 2,
        examples: ["功績 (こうせき)", "成功 (せいこう)"]
    },
    {
        kanji: "好",
        onReading: "コウ",
        kunReading: "す-き、この-む",
        strokes: 6,
        grade: 4,
        session: 2,
        examples: ["好き (すき)", "好物 (こうぶつ)"]
    },
    {
        kanji: "候",
        onReading: "コウ",
        kunReading: "そうろう",
        strokes: 10,
        grade: 4,
        session: 2,
        examples: ["天候 (てんこう)", "候補 (こうほ)"]
    },
    {
        kanji: "航",
        onReading: "コウ",
        kunReading: "",
        strokes: 10,
        grade: 4,
        session: 2,
        examples: ["航空 (こうくう)", "航海 (こうかい)"]
    },
    {
        kanji: "康",
        onReading: "コウ",
        kunReading: "",
        strokes: 11,
        grade: 4,
        session: 2,
        examples: ["健康 (けんこう)", "康復 (こうふく)"]
    },
    {
        kanji: "告",
        onReading: "コク",
        kunReading: "つ-げる",
        strokes: 7,
        grade: 4,
        session: 2,
        examples: ["告白 (こくはく)", "報告 (ほうこく)"]
    },
    {
        kanji: "差",
        onReading: "サ",
        kunReading: "さ-す",
        strokes: 10,
        grade: 4,
        session: 2,
        examples: ["差別 (さべつ)", "較差 (かくさ)"]
    },
    {
        kanji: "菜",
        onReading: "サイ",
        kunReading: "な",
        strokes: 11,
        grade: 4,
        session: 2,
        examples: ["野菜 (やさい)", "菜食 (さいしょく)"]
    },
    {
        kanji: "最",
        onReading: "サイ",
        kunReading: "もっと-も",
        strokes: 12,
        grade: 4,
        session: 2,
        examples: ["最高 (さいこう)", "最後 (さいご)"]
    },
    {
        kanji: "材",
        onReading: "ザイ",
        kunReading: "",
        strokes: 7,
        grade: 4,
        session: 2,
        examples: ["材料 (ざいりょう)", "教材 (きょうざい)"]
    },
    {
        kanji: "昨",
        onReading: "サク",
        kunReading: "",
        strokes: 9,
        grade: 4,
        session: 2,
        examples: ["昨日 (きのう)", "昨年 (さくねん)"]
    },
    {
        kanji: "札",
        onReading: "サツ",
        kunReading: "ふだ",
        strokes: 5,
        grade: 4,
        session: 2,
        examples: ["札幌 (さっぽろ)", "紙札 (かみふだ)"]
    },
    {
        kanji: "刷",
        onReading: "サツ",
        kunReading: "す-る",
        strokes: 8,
        grade: 4,
        session: 2,
        examples: ["印刷 (いんさつ)", "刷る (する)"]
    },
    {
        kanji: "殺",
        onReading: "サツ、セツ",
        kunReading: "ころ-す",
        strokes: 11,
        grade: 4,
        session: 2,
        examples: ["殺虫剤 (さっちゅうざい)", "殺す (ころす)"]
    },
    {
        kanji: "察",
        onReading: "サツ",
        kunReading: "",
        strokes: 14,
        grade: 4,
        session: 2,
        examples: ["観察 (かんさつ)", "警察 (けいさつ)"]
    },
    {
        kanji: "参",
        onReading: "サン",
        kunReading: "まい-る",
        strokes: 8,
        grade: 4,
        session: 2,
        examples: ["参加 (さんか)", "参考 (さんこう)"]
    },
    {
        kanji: "産",
        onReading: "サン",
        kunReading: "う-む",
        strokes: 11,
        grade: 4,
        session: 2,
        examples: ["生産 (せいさん)", "産業 (さんぎょう)"]
    },
    {
        kanji: "散",
        onReading: "サン",
        kunReading: "ち-る",
        strokes: 12,
        grade: 4,
        session: 2,
        examples: ["散歩 (さんぽ)", "散る (ちる)"]
    },
    {
        kanji: "残",
        onReading: "ザン",
        kunReading: "のこ-る",
        strokes: 10,
        grade: 4,
        session: 2,
        examples: ["残業 (ざんぎょう)", "残念 (ざんねん)"]
    },
    {
        kanji: "士",
        onReading: "シ",
        kunReading: "",
        strokes: 3,
        grade: 4,
        session: 2,
        examples: ["弁護士 (べんごし)", "博士 (はかせ)"]
    },
    {
        kanji: "氏",
        onReading: "シ",
        kunReading: "うじ",
        strokes: 4,
        grade: 4,
        session: 2,
        examples: ["氏名 (しめい)", "苗字 (みょうじ)"]
    },
    {
        kanji: "史",
        onReading: "シ",
        kunReading: "",
        strokes: 5,
        grade: 4,
        session: 2,
        examples: ["歴史 (れきし)", "歴史家 (れきしか)"]
    },
    {
        kanji: "司",
        onReading: "シ",
        kunReading: "",
        strokes: 5,
        grade: 4,
        session: 2,
        examples: ["司会 (しかい)", "司令 (しれい)"]
    },
    {
        kanji: "試",
        onReading: "シ",
        kunReading: "こころ-みる",
        strokes: 13,
        grade: 4,
        session: 2,
        examples: ["試験 (しけん)", "試合 (しあい)"]
    },
    {
        kanji: "児",
        onReading: "ジ、ニ",
        kunReading: "",
        strokes: 7,
        grade: 4,
        session: 2,
        examples: ["児童 (じどう)", "幼児 (ようじ)"]
    },
    {
        kanji: "治",
        onReading: "ジ、チ",
        kunReading: "なお-る",
        strokes: 8,
        grade: 4,
        session: 2,
        examples: ["政治 (せいじ)", "治る (なおる)"]
    },
    {
        kanji: "辞",
        onReading: "ジ",
        kunReading: "や-める",
        strokes: 13,
        grade: 4,
        session: 2,
        examples: ["辞書 (じしょ)", "辞める (やめる)"]
    },
    {
        kanji: "失",
        onReading: "シツ",
        kunReading: "うしな-う",
        strokes: 5,
        grade: 4,
        session: 2,
        examples: ["失敗 (しっぱい)", "失う (うしなう)"]
    },
    {
        kanji: "借",
        onReading: "シャク",
        kunReading: "か-りる",
        strokes: 10,
        grade: 4,
        session: 2,
        examples: ["借金 (しゃっきん)", "借りる (かりる)"]
    },
    {
        kanji: "種",
        onReading: "シュ",
        kunReading: "たね",
        strokes: 14,
        grade: 4,
        session: 2,
        examples: ["種類 (しゅるい)", "種子 (たね)"]
    },
    {
        kanji: "周",
        onReading: "シュウ",
        kunReading: "まわ-り",
        strokes: 8,
        grade: 4,
        session: 2,
        examples: ["周囲 (しゅうい)", "周年 (しゅうねん)"]
    },
    {
        kanji: "祝",
        onReading: "シュク",
        kunReading: "いわ-う",
        strokes: 9,
        grade: 4,
        session: 2,
        examples: ["祝日 (しゅくじつ)", "祝う (いわう)"]
    },
    {
        kanji: "順",
        onReading: "ジュン",
        kunReading: "",
        strokes: 12,
        grade: 4,
        session: 2,
        examples: ["順番 (じゅんばん)", "順序 (じゅんじょ)"]
    },
    {
        kanji: "初",
        onReading: "ショ",
        kunReading: "はじ-め",
        strokes: 7,
        grade: 4,
        session: 2,
        examples: ["初めて (はじめて)", "初級 (しょきゅう)"]
    },
    {
        kanji: "松",
        onReading: "ショウ",
        kunReading: "まつ",
        strokes: 8,
        grade: 4,
        session: 2,
        examples: ["松林 (まつばやし)", "松竹梅 (しょうちくばい)"]
    },
    {
        kanji: "笑",
        onReading: "ショウ",
        kunReading: "わら-う",
        strokes: 10,
        grade: 4,
        session: 2,
        examples: ["笑顔 (えがお)", "微笑む (ほほえむ)"]
    },
    {
        kanji: "唱",
        onReading: "ショウ",
        kunReading: "とな-える",
        strokes: 11,
        grade: 4,
        session: 2,
        examples: ["合唱 (がっしょう)", "唱歌 (しょうか)"]
    },
    {
        kanji: "焼",
        onReading: "ショウ",
        kunReading: "や-く",
        strokes: 12,
        grade: 4,
        session: 2,
        examples: ["焼肉 (やきにく)", "焼く (やく)"]
    },
    {
        kanji: "照",
        onReading: "ショウ",
        kunReading: "て-る",
        strokes: 13,
        grade: 4,
        session: 2,
        examples: ["照明 (しょうめい)", "照る (てる)"]
    },
    {
        kanji: "賞",
        onReading: "ショウ",
        kunReading: "",
        strokes: 15,
        grade: 4,
        session: 2,
        examples: ["賞金 (しょうきん)", "表彰 (ひょうしょう)"]
    },
    {
        kanji: "象",
        onReading: "ショウ、ゾウ",
        kunReading: "",
        strokes: 12,
        grade: 4,
        session: 2,
        examples: ["象徴 (しょうちょう)", "象 (ぞう)"]
    },
    {
        kanji: "臣",
        onReading: "シン、ジン",
        kunReading: "",
        strokes: 7,
        grade: 4,
        session: 2,
        examples: ["大臣 (だいじん)", "臣下 (しんか)"]
    },
    {
        kanji: "信",
        onReading: "シン",
        kunReading: "",
        strokes: 9,
        grade: 4,
        session: 2,
        examples: ["信頼 (しんらい)", "通信 (つうしん)"]
    },
    {
        kanji: "成",
        onReading: "セイ",
        kunReading: "な-る",
        strokes: 6,
        grade: 4,
        session: 2,
        examples: ["成長 (せいちょう)", "成る (なる)"]
    },
    {
        kanji: "省",
        onReading: "セイ、ショウ",
        kunReading: "かえり-みる",
        strokes: 9,
        grade: 4,
        session: 2,
        examples: ["省略 (しょうりゃく)", "反省 (はんせい)"]
    },
    {
        kanji: "清",
        onReading: "セイ、ショウ",
        kunReading: "きよ-い",
        strokes: 11,
        grade: 4,
        session: 2,
        examples: ["清潔 (せいけつ)", "清い (きよい)"]
    },

        {
            kanji: "静",
            onReading: "セイ、ジョウ",
            kunReading: "しず-か",
            strokes: 14,
            grade: 4,
            session: 3,
            examples: ["静か (しずか)", "平静 (へいせい)"]
        },
        {
            kanji: "席",
            onReading: "セキ",
            kunReading: "",
            strokes: 10,
            grade: 4,
            session: 3,
            examples: ["席次 (せきじ)", "座席 (ざせき)"]
        },
        {
            kanji: "積",
            onReading: "セキ",
            kunReading: "つ-む",
            strokes: 16,
            grade: 4,
            session: 3,
            examples: ["積極的 (せっきょくてき)", "積む (つむ)"]
        },
        {
            kanji: "折",
            onReading: "セツ",
            kunReading: "お-る",
            strokes: 7,
            grade: 4,
            session: 3,
            examples: ["折る (おる)", "折紙 (おりがみ)"]
        },
        {
            kanji: "節",
            onReading: "セツ、セチ",
            kunReading: "ふし",
            strokes: 13,
            grade: 4,
            session: 3,
            examples: ["節約 (せつやく)", "季節 (きせつ)"]
        },
        {
            kanji: "説",
            onReading: "セツ",
            kunReading: "と-く",
            strokes: 14,
            grade: 4,
            session: 3,
            examples: ["説明 (せつめい)", "伝説 (でんせつ)"]
        },
        {
            kanji: "浅",
            onReading: "セン",
            kunReading: "あさ-い",
            strokes: 9,
            grade: 4,
            session: 3,
            examples: ["浅い (あさい)", "浅瀬 (あさせ)"]
        },
        {
            kanji: "戦",
            onReading: "セン",
            kunReading: "いくさ、たたか-う",
            strokes: 13,
            grade: 4,
            session: 3,
            examples: ["戦争 (せんそう)", "戦う (たたかう)"]
        },
        {
            kanji: "選",
            onReading: "セン",
            kunReading: "えら-ぶ",
            strokes: 15,
            grade: 4,
            session: 3,
            examples: ["選手 (せんしゅ)", "選ぶ (えらぶ)"]
        },
        {
            kanji: "然",
            onReading: "ゼン、ネン",
            kunReading: "",
            strokes: 12,
            grade: 4,
            session: 3,
            examples: ["自然 (しぜん)", "当然 (とうぜん)"]
        },
        {
            kanji: "争",
            onReading: "ソウ",
            kunReading: "あらそ-う",
            strokes: 6,
            grade: 4,
            session: 3,
            examples: ["争い (あらそい)", "競争 (きょうそう)"]
        },
        {
            kanji: "倉",
            onReading: "ソウ",
            kunReading: "くら",
            strokes: 10,
            grade: 4,
            session: 3,
            examples: ["倉庫 (そうこ)", "米倉 (こめぐら)"]
        },
        {
            kanji: "巣",
            onReading: "ソウ",
            kunReading: "す",
            strokes: 11,
            grade: 4,
            session: 3,
            examples: ["巣箱 (すばこ)", "鳥の巣 (とりのす)"]
        },
        {
            kanji: "束",
            onReading: "ソク",
            kunReading: "たば",
            strokes: 7,
            grade: 4,
            session: 3,
            examples: ["約束 (やくそく)", "束ねる (たばねる)"]
        },
        {
            kanji: "側",
            onReading: "ソク",
            kunReading: "がわ",
            strokes: 11,
            grade: 4,
            session: 3,
            examples: ["側面 (そくめん)", "反対側 (はんたいがわ)"]
        },
        {
            kanji: "続",
            onReading: "ゾク",
            kunReading: "つづ-く",
            strokes: 13,
            grade: 4,
            session: 3,
            examples: ["続く (つづく)", "連続 (れんぞく)"]
        },
        {
            kanji: "卒",
            onReading: "ソツ",
            kunReading: "",
            strokes: 8,
            grade: 4,
            session: 3,
            examples: ["卒業 (そつぎょう)", "卒論 (そつろん)"]
        },
        {
            kanji: "孫",
            onReading: "ソン",
            kunReading: "まご",
            strokes: 10,
            grade: 4,
            session: 3,
            examples: ["孫 (まご)", "子孫 (しそん)"]
        },
        {
            kanji: "帯",
            onReading: "タイ",
            kunReading: "お-びる",
            strokes: 10,
            grade: 4,
            session: 3,
            examples: ["地帯 (ちたい)", "帯びる (おびる)"]
        },
        {
            kanji: "隊",
            onReading: "タイ",
            kunReading: "",
            strokes: 12,
            grade: 4,
            session: 3,
            examples: ["部隊 (ぶたい)", "軍隊 (ぐんたい)"]
        },
        {
            kanji: "達",
            onReading: "タツ",
            kunReading: "",
            strokes: 12,
            grade: 4,
            session: 3,
            examples: ["達成 (たっせい)", "友達 (ともだち)"]
        },
        {
            kanji: "単",
            onReading: "タン",
            kunReading: "",
            strokes: 9,
            grade: 4,
            session: 3,
            examples: ["単語 (たんご)", "単純 (たんじゅん)"]
        },
        {
            kanji: "置",
            onReading: "チ",
            kunReading: "お-く",
            strokes: 13,
            grade: 4,
            session: 3,
            examples: ["位置 (いち)", "置く (おく)"]
        },
        {
            kanji: "仲",
            onReading: "チュウ",
            kunReading: "なか",
            strokes: 6,
            grade: 4,
            session: 3,
            examples: ["仲間 (なかま)", "仲良し (なかよし)"]
        },
        {
            kanji: "貯",
            onReading: "チョ",
            kunReading: "",
            strokes: 12,
            grade: 4,
            session: 3,
            examples: ["貯金 (ちょきん)", "貯蓄 (ちょちく)"]
        },
        {
            kanji: "兆",
            onReading: "チョウ",
            kunReading: "きざ-す",
            strokes: 6,
            grade: 4,
            session: 3,
            examples: ["兆候 (ちょうこう)", "前兆 (ぜんちょう)"]
        },
        {
            kanji: "腸",
            onReading: "チョウ",
            kunReading: "",
            strokes: 13,
            grade: 4,
            session: 3,
            examples: ["腸 (ちょう)", "胃腸 (いちょう)"]
        },
        {
            kanji: "低",
            onReading: "テイ",
            kunReading: "ひく-い",
            strokes: 7,
            grade: 4,
            session: 3,
            examples: ["低い (ひくい)", "低下 (ていか)"]
        },
        {
            kanji: "底",
            onReading: "テイ",
            kunReading: "そこ",
            strokes: 8,
            grade: 4,
            session: 3,
            examples: ["底 (そこ)", "海底 (かいてい)"]
        },
        {
            kanji: "停",
            onReading: "テイ",
            kunReading: "と-める",
            strokes: 11,
            grade: 4,
            session: 3,
            examples: ["停車 (ていしゃ)", "停止 (ていし)"]
        },
        {
            kanji: "的",
            onReading: "テキ",
            kunReading: "まと",
            strokes: 8,
            grade: 4,
            session: 3,
            examples: ["目的 (もくてき)", "的確 (てきかく)"]
        },
        {
            kanji: "典",
            onReading: "テン",
            kunReading: "",
            strokes: 8,
            grade: 4,
            session: 3,
            examples: ["辞典 (じてん)", "典型 (てんけい)"]
        },
        {
            kanji: "伝",
            onReading: "デン",
            kunReading: "つた-える",
            strokes: 6,
            grade: 4,
            session: 3,
            examples: ["伝説 (でんせつ)", "伝える (つたえる)"]
        },
        {
            kanji: "徒",
            onReading: "ト",
            kunReading: "",
            strokes: 10,
            grade: 4,
            session: 3,
            examples: ["生徒 (せいと)", "徒歩 (とほ)"]
        },
        {
            kanji: "努",
            onReading: "ド",
            kunReading: "つと-める",
            strokes: 7,
            grade: 4,
            session: 3,
            examples: ["努力 (どりょく)", "努める (つとめる)"]
        },
        {
            kanji: "灯",
            onReading: "トウ",
            kunReading: "ひ",
            strokes: 6,
            grade: 4,
            session: 3,
            examples: ["灯り (あかり)", "灯台 (とうだい)"]
        },
        {
            kanji: "堂",
            onReading: "ドウ",
            kunReading: "",
            strokes: 11,
            grade: 4,
            session: 3,
            examples: ["食堂 (しょくどう)", "講堂 (こうどう)"]
        },
        {
            kanji: "働",
            onReading: "ドウ",
            kunReading: "はたら-く",
            strokes: 13,
            grade: 4,
            session: 3,
            examples: ["労働 (ろうどう)", "働く (はたらく)"]
        },
        {
            kanji: "特",
            onReading: "トク",
            kunReading: "",
            strokes: 10,
            grade: 4,
            session: 3,
            examples: ["特別 (とくべつ)", "特徴 (とくちょう)"]
        },
        {
            kanji: "得",
            onReading: "トク",
            kunReading: "え-る",
            strokes: 11,
            grade: 4,
            session: 3,
            examples: ["得意 (とくい)", "得る (える)"]
        },
        {
            kanji: "毒",
            onReading: "ドク",
            kunReading: "",
            strokes: 8,
            grade: 4,
            session: 3,
            examples: ["毒物 (どくぶつ)", "中毒 (ちゅうどく)"]
        },
        {
            kanji: "熱",
            onReading: "ネツ",
            kunReading: "あつ-い",
            strokes: 15,
            grade: 4,
            session: 3,
            examples: ["熱心 (ねっしん)", "熱い (あつい)"]
        },
        {
            kanji: "念",
            onReading: "ネン",
            kunReading: "",
            strokes: 8,
            grade: 4,
            session: 3,
            examples: ["記念 (きねん)", "念願 (ねんがん)"]
        },
        {
            kanji: "敗",
            onReading: "ハイ",
            kunReading: "やぶ-れる",
            strokes: 11,
            grade: 4,
            session: 3,
            examples: ["敗北 (はいぼく)", "失敗 (しっぱい)"]
        },
        {
            kanji: "梅",
            onReading: "バイ",
            kunReading: "うめ",
            strokes: 10,
            grade: 4,
            session: 3,
            examples: ["梅雨 (つゆ)", "梅干し (うめぼし)"]
        },
        {
            kanji: "博",
            onReading: "ハク",
            kunReading: "",
            strokes: 12,
            grade: 4,
            session: 3,
            examples: ["博士 (はかせ)", "博物館 (はくぶつかん)"]
        },
        {
            kanji: "飯",
            onReading: "ハン",
            kunReading: "めし",
            strokes: 12,
            grade: 4,
            session: 3,
            examples: ["御飯 (ごはん)", "炊飯 (すいはん)"]
        },
        {
            kanji: "飛",
            onReading: "ヒ",
            kunReading: "と-ぶ",
            strokes: 9,
            grade: 4,
            session: 3,
            examples: ["飛行機 (ひこうき)", "飛ぶ (とぶ)"]
        },
        {
            kanji: "費",
            onReading: "ヒ",
            kunReading: "つい-やす",
            strokes: 12,
            grade: 4,
            session: 3,
            examples: ["費用 (ひよう)", "消費 (しょうひ)"]
        },
        {
            kanji: "必",
            onReading: "ヒツ",
            kunReading: "かなら-ず",
            strokes: 5,
            grade: 4,
            session: 3,
            examples: ["必要 (ひつよう)", "必ず (かならず)"]
        },
        {
            kanji: "票",
            onReading: "ヒョウ",
            kunReading: "",
            strokes: 11,
            grade: 4,
            session: 3,
            examples: ["投票 (とうひょう)", "票数 (ひょうすう)"]
        },
        {
            kanji: "標",
            onReading: "ヒョウ",
            kunReading: "",
            strokes: 15,
            grade: 4,
            session: 3,
            examples: ["標準 (ひょうじゅん)", "目標 (もくひょう)"]
        },
{
    kanji: "静",
    onReading: "セイ、ジョウ",
    kunReading: "しず-か",
    strokes: 14,
    grade: 4,
    session: 3,
    examples: ["静か (しずか)", "平静 (へいせい)"]
},
{
    kanji: "席",
    onReading: "セキ",
    kunReading: "",
    strokes: 10,
    grade: 4,
    session: 3,
    examples: ["席次 (せきじ)", "座席 (ざせき)"]
},
{
    kanji: "積",
    onReading: "セキ",
    kunReading: "つ-む",
    strokes: 16,
    grade: 4,
    session: 3,
    examples: ["積極的 (せっきょくてき)", "積む (つむ)"]
},
{
    kanji: "折",
    onReading: "セツ",
    kunReading: "お-る",
    strokes: 7,
    grade: 4,
    session: 3,
    examples: ["折る (おる)", "折紙 (おりがみ)"]
},
{
    kanji: "節",
    onReading: "セツ、セチ",
    kunReading: "ふし",
    strokes: 13,
    grade: 4,
    session: 3,
    examples: ["節約 (せつやく)", "季節 (きせつ)"]
},
{
    kanji: "説",
    onReading: "セツ",
    kunReading: "と-く",
    strokes: 14,
    grade: 4,
    session: 3,
    examples: ["説明 (せつめい)", "伝説 (でんせつ)"]
},
{
    kanji: "浅",
    onReading: "セン",
    kunReading: "あさ-い",
    strokes: 9,
    grade: 4,
    session: 3,
    examples: ["浅い (あさい)", "浅瀬 (あさせ)"]
},
{
    kanji: "戦",
    onReading: "セン",
    kunReading: "いくさ、たたか-う",
    strokes: 13,
    grade: 4,
    session: 3,
    examples: ["戦争 (せんそう)", "戦う (たたかう)"]
},
{
    kanji: "選",
    onReading: "セン",
    kunReading: "えら-ぶ",
    strokes: 15,
    grade: 4,
    session: 3,
    examples: ["選手 (せんしゅ)", "選ぶ (えらぶ)"]
},
{
    kanji: "然",
    onReading: "ゼン、ネン",
    kunReading: "",
    strokes: 12,
    grade: 4,
    session: 3,
    examples: ["自然 (しぜん)", "当然 (とうぜん)"]
},
{
    kanji: "争",
    onReading: "ソウ",
    kunReading: "あらそ-う",
    strokes: 6,
    grade: 4,
    session: 3,
    examples: ["争い (あらそい)", "競争 (きょうそう)"]
},
{
    kanji: "倉",
    onReading: "ソウ",
    kunReading: "くら",
    strokes: 10,
    grade: 4,
    session: 3,
    examples: ["倉庫 (そうこ)", "米倉 (こめぐら)"]
},
{
    kanji: "巣",
    onReading: "ソウ",
    kunReading: "す",
    strokes: 11,
    grade: 4,
    session: 3,
    examples: ["巣箱 (すばこ)", "鳥の巣 (とりのす)"]
},
{
    kanji: "束",
    onReading: "ソク",
    kunReading: "たば",
    strokes: 7,
    grade: 4,
    session: 3,
    examples: ["約束 (やくそく)", "束ねる (たばねる)"]
},
{
    kanji: "側",
    onReading: "ソク",
    kunReading: "がわ",
    strokes: 11,
    grade: 4,
    session: 3,
    examples: ["側面 (そくめん)", "反対側 (はんたいがわ)"]
},
{
    kanji: "続",
    onReading: "ゾク",
    kunReading: "つづ-く",
    strokes: 13,
    grade: 4,
    session: 3,
    examples: ["続く (つづく)", "連続 (れんぞく)"]
},
{
    kanji: "卒",
    onReading: "ソツ",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 3,
    examples: ["卒業 (そつぎょう)", "卒論 (そつろん)"]
},
{
    kanji: "孫",
    onReading: "ソン",
    kunReading: "まご",
    strokes: 10,
    grade: 4,
    session: 3,
    examples: ["孫 (まご)", "子孫 (しそん)"]
},
{
    kanji: "帯",
    onReading: "タイ",
    kunReading: "お-びる",
    strokes: 10,
    grade: 4,
    session: 3,
    examples: ["地帯 (ちたい)", "帯びる (おびる)"]
},
{
    kanji: "隊",
    onReading: "タイ",
    kunReading: "",
    strokes: 12,
    grade: 4,
    session: 3,
    examples: ["部隊 (ぶたい)", "軍隊 (ぐんたい)"]
},
{
    kanji: "達",
    onReading: "タツ",
    kunReading: "",
    strokes: 12,
    grade: 4,
    session: 3,
    examples: ["達成 (たっせい)", "友達 (ともだち)"]
},
{
    kanji: "単",
    onReading: "タン",
    kunReading: "",
    strokes: 9,
    grade: 4,
    session: 3,
    examples: ["単語 (たんご)", "単純 (たんじゅん)"]
},
{
    kanji: "置",
    onReading: "チ",
    kunReading: "お-く",
    strokes: 13,
    grade: 4,
    session: 3,
    examples: ["位置 (いち)", "置く (おく)"]
},
{
    kanji: "仲",
    onReading: "チュウ",
    kunReading: "なか",
    strokes: 6,
    grade: 4,
    session: 3,
    examples: ["仲間 (なかま)", "仲良し (なかよし)"]
},
{
    kanji: "貯",
    onReading: "チョ",
    kunReading: "",
    strokes: 12,
    grade: 4,
    session: 3,
    examples: ["貯金 (ちょきん)", "貯蓄 (ちょちく)"]
},
{
    kanji: "兆",
    onReading: "チョウ",
    kunReading: "きざ-す",
    strokes: 6,
    grade: 4,
    session: 3,
    examples: ["兆候 (ちょうこう)", "前兆 (ぜんちょう)"]
},
{
    kanji: "腸",
    onReading: "チョウ",
    kunReading: "",
    strokes: 13,
    grade: 4,
    session: 3,
    examples: ["腸 (ちょう)", "胃腸 (いちょう)"]
},
{
    kanji: "低",
    onReading: "テイ",
    kunReading: "ひく-い",
    strokes: 7,
    grade: 4,
    session: 3,
    examples: ["低い (ひくい)", "低下 (ていか)"]
},
{
    kanji: "底",
    onReading: "テイ",
    kunReading: "そこ",
    strokes: 8,
    grade: 4,
    session: 3,
    examples: ["底 (そこ)", "海底 (かいてい)"]
},
{
    kanji: "停",
    onReading: "テイ",
    kunReading: "と-める",
    strokes: 11,
    grade: 4,
    session: 3,
    examples: ["停車 (ていしゃ)", "停止 (ていし)"]
},
{
    kanji: "的",
    onReading: "テキ",
    kunReading: "まと",
    strokes: 8,
    grade: 4,
    session: 3,
    examples: ["目的 (もくてき)", "的確 (てきかく)"]
},
{
    kanji: "典",
    onReading: "テン",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 3,
    examples: ["辞典 (じてん)", "典型 (てんけい)"]
},
{
    kanji: "伝",
    onReading: "デン",
    kunReading: "つた-える",
    strokes: 6,
    grade: 4,
    session: 3,
    examples: ["伝説 (でんせつ)", "伝える (つたえる)"]
},
{
    kanji: "徒",
    onReading: "ト",
    kunReading: "",
    strokes: 10,
    grade: 4,
    session: 3,
    examples: ["生徒 (せいと)", "徒歩 (とほ)"]
},
{
    kanji: "努",
    onReading: "ド",
    kunReading: "つと-める",
    strokes: 7,
    grade: 4,
    session: 3,
    examples: ["努力 (どりょく)", "努める (つとめる)"]
},
{
    kanji: "灯",
    onReading: "トウ",
    kunReading: "ひ",
    strokes: 6,
    grade: 4,
    session: 3,
    examples: ["灯り (あかり)", "灯台 (とうだい)"]
},
{
    kanji: "堂",
    onReading: "ドウ",
    kunReading: "",
    strokes: 11,
    grade: 4,
    session: 3,
    examples: ["食堂 (しょくどう)", "講堂 (こうどう)"]
},
{
    kanji: "働",
    onReading: "ドウ",
    kunReading: "はたら-く",
    strokes: 13,
    grade: 4,
    session: 3,
    examples: ["労働 (ろうどう)", "働く (はたらく)"]
},
{
    kanji: "特",
    onReading: "トク",
    kunReading: "",
    strokes: 10,
    grade: 4,
    session: 3,
    examples: ["特別 (とくべつ)", "特徴 (とくちょう)"]
},
{
    kanji: "得",
    onReading: "トク",
    kunReading: "え-る",
    strokes: 11,
    grade: 4,
    session: 3,
    examples: ["得意 (とくい)", "得る (える)"]
},
{
    kanji: "毒",
    onReading: "ドク",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 3,
    examples: ["毒物 (どくぶつ)", "中毒 (ちゅうどく)"]
},
{
    kanji: "熱",
    onReading: "ネツ",
    kunReading: "あつ-い",
    strokes: 15,
    grade: 4,
    session: 3,
    examples: ["熱心 (ねっしん)", "熱い (あつい)"]
},
{
    kanji: "念",
    onReading: "ネン",
    kunReading: "",
    strokes: 8,
    grade: 4,
    session: 3,
    examples: ["記念 (きねん)", "念願 (ねんがん)"]
},
{
    kanji: "敗",
    onReading: "ハイ",
    kunReading: "やぶ-れる",
    strokes: 11,
    grade: 4,
    session: 3,
    examples: ["敗北 (はいぼく)", "失敗 (しっぱい)"]
},
{
    kanji: "梅",
    onReading: "バイ",
    kunReading: "うめ",
    strokes: 10,
    grade: 4,
    session: 3,
    examples: ["梅雨 (つゆ)", "梅干し (うめぼし)"]
},
{
    kanji: "博",
    onReading: "ハク",
    kunReading: "",
    strokes: 12,
    grade: 4,
    session: 3,
    examples: ["博士 (はかせ)", "博物館 (はくぶつかん)"]
},
{
    kanji: "飯",
    onReading: "ハン",
    kunReading: "めし",
    strokes: 12,
    grade: 4,
    session: 3,
    examples: ["御飯 (ごはん)", "炊飯 (すいはん)"]
},
{
    kanji: "飛",
    onReading: "ヒ",
    kunReading: "と-ぶ",
    strokes: 9,
    grade: 4,
    session: 3,
    examples: ["飛行機 (ひこうき)", "飛ぶ (とぶ)"]
},
{
    kanji: "費",
    onReading: "ヒ",
    kunReading: "つい-やす",
    strokes: 12,
    grade: 4,
    session: 3,
    examples: ["費用 (ひよう)", "消費 (しょうひ)"]
},
{
    kanji: "必",
    onReading: "ヒツ",
    kunReading: "かなら-ず",
    strokes: 5,
    grade: 4,
    session: 3,
    examples: ["必要 (ひつよう)", "必ず (かならず)"]
},
{
    kanji: "票",
    onReading: "ヒョウ",
    kunReading: "",
    strokes: 11,
    grade: 4,
    session: 3,
    examples: ["投票 (とうひょう)", "票数 (ひょうすう)"]
},
{
    kanji: "標",
    onReading: "ヒョウ",
    kunReading: "",
    strokes: 15,
    grade: 4,
    session: 3,
    examples: ["標準 (ひょうじゅん)", "目標 (もくひょう)"]
},
    {
        kanji: "不",
        onReading: "フ、ブ",
        kunReading: "",
        strokes: 4,
        grade: 4,
        session: 4,
        examples: ["不安 (ふあん)", "不可能 (ふかのう)"]
    },
    {
        kanji: "夫",
        onReading: "フ、フウ",
        kunReading: "おっと",
        strokes: 4,
        grade: 4,
        session: 4,
        examples: ["夫婦 (ふうふ)", "夫 (おっと)"]
    },
    {
        kanji: "付",
        onReading: "フ",
        kunReading: "つ-ける",
        strokes: 5,
        grade: 4,
        session: 4,
        examples: ["付近 (ふきん)", "付ける (つける)"]
    },
    {
        kanji: "府",
        onReading: "フ",
        kunReading: "",
        strokes: 8,
        grade: 4,
        session: 4,
        examples: ["政府 (せいふ)", "府立 (ふりつ)"]
    },
    {
        kanji: "副",
        onReading: "フク",
        kunReading: "",
        strokes: 11,
        grade: 4,
        session: 4,
        examples: ["副作用 (ふくさよう)", "副会長 (ふくかいちょう)"]
    },
    {
        kanji: "粉",
        onReading: "フン",
        kunReading: "こ、こな",
        strokes: 10,
        grade: 4,
        session: 4,
        examples: ["粉末 (ふんまつ)", "小麦粉 (こむぎこ)"]
    },
    {
        kanji: "兵",
        onReading: "ヘイ、ヒョウ",
        kunReading: "",
        strokes: 7,
        grade: 4,
        session: 4,
        examples: ["兵士 (へいし)", "兵器 (へいき)"]
    },
    {
        kanji: "別",
        onReading: "ベツ",
        kunReading: "わか-れる",
        strokes: 7,
        grade: 4,
        session: 4,
        examples: ["特別 (とくべつ)", "別れる (わかれる)"]
    },
    {
        kanji: "辺",
        onReading: "ヘン",
        kunReading: "あた-り",
        strokes: 5,
        grade: 4,
        session: 4,
        examples: ["周辺 (しゅうへん)", "辺り (あたり)"]
    },
    {
        kanji: "変",
        onReading: "ヘン",
        kunReading: "か-わる",
        strokes: 9,
        grade: 4,
        session: 4,
        examples: ["変化 (へんか)", "変わる (かわる)"]
    },
    {
        kanji: "便",
        onReading: "ベン、ビン",
        kunReading: "たよ-り",
        strokes: 9,
        grade: 4,
        session: 4,
        examples: ["便利 (べんり)", "郵便 (ゆうびん)"]
    },
    {
        kanji: "包",
        onReading: "ホウ",
        kunReading: "つつ-む",
        strokes: 5,
        grade: 4,
        session: 4,
        examples: ["包装 (ほうそう)", "包む (つつむ)"]
    },
    {
        kanji: "法",
        onReading: "ホウ",
        kunReading: "",
        strokes: 8,
        grade: 4,
        session: 4,
        examples: ["法律 (ほうりつ)", "方法 (ほうほう)"]
    },
    {
        kanji: "望",
        onReading: "ボウ、モウ",
        kunReading: "のぞ-む",
        strokes: 11,
        grade: 4,
        session: 4,
        examples: ["希望 (きぼう)", "望む (のぞむ)"]
    },
    {
        kanji: "牧",
        onReading: "ボク",
        kunReading: "まき",
        strokes: 8,
        grade: 4,
        session: 4,
        examples: ["牧場 (ぼくじょう)", "牧師 (ぼくし)"]
    },
    {
        kanji: "末",
        onReading: "マツ、バツ",
        kunReading: "すえ",
        strokes: 5,
        grade: 4,
        session: 4,
        examples: ["末期 (まっき)", "週末 (しゅうまつ)"]
    },
    {
        kanji: "満",
        onReading: "マン",
        kunReading: "み-ちる",
        strokes: 12,
        grade: 4,
        session: 4,
        examples: ["満足 (まんぞく)", "満月 (まんげつ)"]
    },
    {
        kanji: "未",
        onReading: "ミ",
        kunReading: "いま-だ",
        strokes: 5,
        grade: 4,
        session: 4,
        examples: ["未来 (みらい)", "未定 (みてい)"]
    },
    {
        kanji: "脈",
        onReading: "ミャク",
        kunReading: "",
        strokes: 10,
        grade: 4,
        session: 4,
        examples: ["脈拍 (みゃくはく)", "血脈 (けつみゃく)"]
    },
    {
        kanji: "民",
        onReading: "ミン",
        kunReading: "たみ",
        strokes: 5,
        grade: 4,
        session: 4,
        examples: ["国民 (こくみん)", "民族 (みんぞく)"]
    },
    {
        kanji: "無",
        onReading: "ム、ブ",
        kunReading: "な-い",
        strokes: 12,
        grade: 4,
        session: 4,
        examples: ["無理 (むり)", "無い (ない)"]
    },
    {
        kanji: "約",
        onReading: "ヤク",
        kunReading: "",
        strokes: 9,
        grade: 4,
        session: 4,
        examples: ["約束 (やくそく)", "契約 (けいやく)"]
    },
    {
        kanji: "勇",
        onReading: "ユウ",
        kunReading: "いさ-む",
        strokes: 9,
        grade: 4,
        session: 4,
        examples: ["勇気 (ゆうき)", "勇者 (ゆうしゃ)"]
    },
    {
        kanji: "要",
        onReading: "ヨウ",
        kunReading: "い-る",
        strokes: 9,
        grade: 4,
        session: 4,
        examples: ["要求 (ようきゅう)", "重要 (じゅうよう)"]
    },
    {
        kanji: "養",
        onReading: "ヨウ",
        kunReading: "やしな-う",
        strokes: 14,
        grade: 4,
        session: 4,
        examples: ["養育 (よういく)", "栄養 (えいよう)"]
    },
    {
        kanji: "浴",
        onReading: "ヨク",
        kunReading: "あ-びる",
        strokes: 10,
        grade: 4,
        session: 4,
        examples: ["入浴 (にゅうよく)", "浴びる (あびる)"]
    },
    {
        kanji: "利",
        onReading: "リ",
        kunReading: "き-く",
        strokes: 7,
        grade: 4,
        session: 4,
        examples: ["利益 (りえき)", "便利 (べんり)"]
    },
    {
        kanji: "陸",
        onReading: "リク",
        kunReading: "",
        strokes: 11,
        grade: 4,
        session: 4,
        examples: ["陸地 (りくち)", "上陸 (じょうりく)"]
    },
    {
        kanji: "良",
        onReading: "リョウ",
        kunReading: "よ-い",
        strokes: 7,
        grade: 4,
        session: 4,
        examples: ["良好 (りょうこう)", "良い (よい)"]
    },
    {
        kanji: "料",
        onReading: "リョウ",
        kunReading: "",
        strokes: 10,
        grade: 4,
        session: 4,
        examples: ["料理 (りょうり)", "材料 (ざいりょう)"]
    },
    {
        kanji: "量",
        onReading: "リョウ",
        kunReading: "はか-る",
        strokes: 12,
        grade: 4,
        session: 4,
        examples: ["数量 (すうりょう)", "測量 (そくりょう)"]
    },
    {
        kanji: "輪",
        onReading: "リン",
        kunReading: "わ",
        strokes: 13,
        grade: 4,
        session: 4,
        examples: ["輪郭 (りんかく)", "車輪 (しゃりん)"]
    },
    {
        kanji: "類",
        onReading: "ルイ",
        kunReading: "たぐい",
        strokes: 18,
        grade: 4,
        session: 4,
        examples: ["分類 (ぶんるい)", "種類 (しゅるい)"]
    },
    {
        kanji: "令",
        onReading: "レイ",
        kunReading: "",
        strokes: 5,
        grade: 4,
        session: 4,
        examples: ["命令 (めいれい)", "法令 (ほうれい)"]
    },
    {
        kanji: "冷",
        onReading: "レイ",
        kunReading: "つめ-たい",
        strokes: 7,
        grade: 4,
        session: 4,
        examples: ["冷蔵庫 (れいぞうこ)", "冷たい (つめたい)"]
    },
    {
        kanji: "例",
        onReading: "レイ",
        kunReading: "たと-える",
        strokes: 8,
        grade: 4,
        session: 4,
        examples: ["例文 (れいぶん)", "例える (たとえる)"]
    },
    {
        kanji: "歴",
        onReading: "レキ",
        kunReading: "",
        strokes: 14,
        grade: 4,
        session: 4,
        examples: ["歴史 (れきし)", "経歴 (けいれき)"]
    },
    {
        kanji: "連",
        onReading: "レン",
        kunReading: "つら-なる",
        strokes: 10,
        grade: 4,
        session: 4,
        examples: ["連絡 (れんらく)", "連続 (れんぞく)"]
    },
    {
        kanji: "老",
        onReading: "ロウ",
        kunReading: "お-いる",
        strokes: 6,
        grade: 4,
        session: 4,
        examples: ["老人 (ろうじん)", "老後 (ろうご)"]
    },
    {
        kanji: "労",
        onReading: "ロウ",
        kunReading: "いたわ-る",
        strokes: 7,
        grade: 4,
        session: 4,
        examples: ["労働 (ろうどう)", "苦労 (くろう)"]
    },
    {
        kanji: "録",
        onReading: "ロク",
        kunReading: "",
        strokes: 16,
        grade: 4,
        session: 4,
        examples: ["記録 (きろく)", "録音 (ろくおん)"]
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    //5年级汉字
    {
        kanji: "圧",
        onReading: "アツ",
        kunReading: "お-す",
        strokes: 5,
        grade: 5,
        session: 1,
        examples: ["圧力 (あつりょく)", "圧迫 (あっぱく)"]
    },
    {
        kanji: "移",
        onReading: "イ",
        kunReading: "うつ-る、うつ-す",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["移動 (いどう)", "移転 (いてん)"]
    },
    {
        kanji: "因",
        onReading: "イン",
        kunReading: "よ-る",
        strokes: 6,
        grade: 5,
        session: 1,
        examples: ["原因 (げんいん)", "因果 (いんが)"]
    },
    {
        kanji: "永",
        onReading: "エイ",
        kunReading: "なが-い",
        strokes: 5,
        grade: 5,
        session: 1,
        examples: ["永遠 (えいえん)", "永久 (えいきゅう)"]
    },
    {
        kanji: "営",
        onReading: "エイ",
        kunReading: "いとな-む",
        strokes: 12,
        grade: 5,
        session: 1,
        examples: ["営業 (えいぎょう)", "経営 (けいえい)"]
    },
    {
        kanji: "衛",
        onReading: "エイ",
        kunReading: "",
        strokes: 13,
        grade: 5,
        session: 1,
        examples: ["衛生 (えいせい)", "防衛 (ぼうえい)"]
    },
    {
        kanji: "易",
        onReading: "エキ、イ",
        kunReading: "やさ-しい",
        strokes: 8,
        grade: 5,
        session: 1,
        examples: ["容易 (ようい)", "易しい (やさしい)"]
    },
    {
        kanji: "益",
        onReading: "エキ、ヤク",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 1,
        examples: ["利益 (りえき)", "有益 (ゆうえき)"]
    },
    {
        kanji: "液",
        onReading: "エキ",
        kunReading: "",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["液体 (えきたい)", "血液 (けつえき)"]
    },
    {
        kanji: "演",
        onReading: "エン",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 1,
        examples: ["演奏 (えんそう)", "公演 (こうえん)"]
    },
    {
        kanji: "応",
        onReading: "オウ",
        kunReading: "こた-える",
        strokes: 7,
        grade: 5,
        session: 1,
        examples: ["応答 (おうとう)", "反応 (はんのう)"]
    },
    {
        kanji: "往",
        onReading: "オウ",
        kunReading: "い-く",
        strokes: 8,
        grade: 5,
        session: 1,
        examples: ["往復 (おうふく)", "往来 (おうらい)"]
    },
    {
        kanji: "桜",
        onReading: "オウ",
        kunReading: "さくら",
        strokes: 10,
        grade: 5,
        session: 1,
        examples: ["桜花 (おうか)", "桜並木 (さくらなみき)"]
    },
    {
        kanji: "恩",
        onReading: "オン",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 1,
        examples: ["恩恵 (おんけい)", "恩返し (おんがえし)"]
    },
    {
        kanji: "可",
        onReading: "カ",
        kunReading: "",
        strokes: 5,
        grade: 5,
        session: 1,
        examples: ["可能 (かのう)", "許可 (きょか)"]
    },
    {
        kanji: "仮",
        onReading: "カ、ケ",
        kunReading: "かり",
        strokes: 6,
        grade: 5,
        session: 1,
        examples: ["仮名 (かな)", "仮設 (かせつ)"]
    },
    {
        kanji: "価",
        onReading: "カ、ケ",
        kunReading: "あたい",
        strokes: 8,
        grade: 5,
        session: 1,
        examples: ["価格 (かかく)", "価値 (かち)"]
    },
    {
        kanji: "河",
        onReading: "カ",
        kunReading: "かわ",
        strokes: 8,
        grade: 5,
        session: 1,
        examples: ["河川 (かせん)", "河口 (かこう)"]
    },
    {
        kanji: "過",
        onReading: "カ",
        kunReading: "す-ぎる、あやま-つ",
        strokes: 12,
        grade: 5,
        session: 1,
        examples: ["過去 (かこ)", "経過 (けいか)"]
    },
    {
        kanji: "賀",
        onReading: "ガ",
        kunReading: "",
        strokes: 12,
        grade: 5,
        session: 1,
        examples: ["祝賀 (しゅくが)", "年賀 (ねんが)"]
    },
    {
        kanji: "快",
        onReading: "カイ",
        kunReading: "こころよ-い",
        strokes: 7,
        grade: 5,
        session: 1,
        examples: ["快速 (かいそく)", "快適 (かいてき)"]
    },
    {
        kanji: "解",
        onReading: "カイ、ゲ",
        kunReading: "と-く、と-ける",
        strokes: 13,
        grade: 5,
        session: 1,
        examples: ["解決 (かいけつ)", "理解 (りかい)"]
    },
    {
        kanji: "格",
        onReading: "カク",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 1,
        examples: ["格好 (かっこう)", "性格 (せいかく)"]
    },
    {
        kanji: "確",
        onReading: "カク",
        kunReading: "たし-か",
        strokes: 15,
        grade: 5,
        session: 1,
        examples: ["確認 (かくにん)", "確実 (かくじつ)"]
    },
    {
        kanji: "額",
        onReading: "ガク",
        kunReading: "ひたい",
        strokes: 18,
        grade: 5,
        session: 1,
        examples: ["金額 (きんがく)", "額縁 (がくぶち)"]
    },
    {
        kanji: "刊",
        onReading: "カン",
        kunReading: "",
        strokes: 5,
        grade: 5,
        session: 1,
        examples: ["刊行 (かんこう)", "月刊 (げっかん)"]
    },
    {
        kanji: "幹",
        onReading: "カン",
        kunReading: "みき",
        strokes: 13,
        grade: 5,
        session: 1,
        examples: ["幹部 (かんぶ)", "根幹 (こんかん)"]
    },
    {
        kanji: "慣",
        onReading: "カン",
        kunReading: "な-れる",
        strokes: 14,
        grade: 5,
        session: 1,
        examples: ["慣習 (かんしゅう)", "習慣 (しゅうかん)"]
    },
    {
        kanji: "眼",
        onReading: "ガン、ゲン",
        kunReading: "め",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["眼鏡 (めがね)", "眼科 (がんか)"]
    },
    {
        kanji: "基",
        onReading: "キ",
        kunReading: "もと",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["基本 (きほん)", "基準 (きじゅん)"]
    },
    {
        kanji: "寄",
        onReading: "キ",
        kunReading: "よ-る",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["寄付 (きふ)", "寄る (よる)"]
    },
    {
        kanji: "規",
        onReading: "キ",
        kunReading: "",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["規則 (きそく)", "規模 (きぼ)"]
    },
    {
        kanji: "技",
        onReading: "ギ",
        kunReading: "わざ",
        strokes: 7,
        grade: 5,
        session: 1,
        examples: ["技術 (ぎじゅつ)", "技能 (ぎのう)"]
    },
    {
        kanji: "義",
        onReading: "ギ",
        kunReading: "",
        strokes: 13,
        grade: 5,
        session: 1,
        examples: ["義務 (ぎむ)", "正義 (せいぎ)"]
    },
    {
        kanji: "逆",
        onReading: "ギャク",
        kunReading: "さか",
        strokes: 9,
        grade: 5,
        session: 1,
        examples: ["逆転 (ぎゃくてん)", "反逆 (はんぎゃく)"]
    },
    {
        kanji: "久",
        onReading: "キュウ、ク",
        kunReading: "ひさ-しい",
        strokes: 3,
        grade: 5,
        session: 1,
        examples: ["永久 (えいきゅう)", "久しぶり (ひさしぶり)"]
    },
    {
        kanji: "旧",
        onReading: "キュウ",
        kunReading: "ふる-い",
        strokes: 5,
        grade: 5,
        session: 1,
        examples: ["旧正月 (きゅうしょうがつ)", "旧友 (きゅうゆう)"]
    },
    {
        kanji: "居",
        onReading: "キョ",
        kunReading: "い-る",
        strokes: 8,
        grade: 5,
        session: 1,
        examples: ["居間 (いま)", "居住 (きょじゅう)"]
    },
    {
        kanji: "許",
        onReading: "キョ",
        kunReading: "ゆる-す",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["許可 (きょか)", "許す (ゆるす)"]
    },
    {
        kanji: "境",
        onReading: "キョウ、ケイ",
        kunReading: "さかい",
        strokes: 14,
        grade: 5,
        session: 1,
        examples: ["境界 (きょうかい)", "環境 (かんきょう)"]
    },
    {
        kanji: "均",
        onReading: "キン",
        kunReading: "",
        strokes: 7,
        grade: 5,
        session: 1,
        examples: ["均等 (きんとう)", "平均 (へいきん)"]
    },
    {
        kanji: "禁",
        onReading: "キン",
        kunReading: "",
        strokes: 13,
        grade: 5,
        session: 1,
        examples: ["禁止 (きんし)", "禁煙 (きんえん)"]
    },
    {
        kanji: "句",
        onReading: "ク",
        kunReading: "",
        strokes: 5,
        grade: 5,
        session: 1,
        examples: ["句読点 (くとうてん)", "文句 (もんく)"]
    },
    {
        kanji: "群",
        onReading: "グン",
        kunReading: "む-れる",
        strokes: 13,
        grade: 5,
        session: 1,
        examples: ["群衆 (ぐんしゅう)", "群れ (むれ)"]
    },
    {
        kanji: "経",
        onReading: "ケイ、キョウ",
        kunReading: "へ-る",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["経済 (けいざい)", "経験 (けいけん)"]
    },
    {
        kanji: "潔",
        onReading: "ケツ",
        kunReading: "いさぎよ-い",
        strokes: 15,
        grade: 5,
        session: 1,
        examples: ["潔白 (けっぱく)", "清潔 (せいけつ)"]
    },
    {
        kanji: "件",
        onReading: "ケン",
        kunReading: "",
        strokes: 6,
        grade: 5,
        session: 1,
        examples: ["事件 (じけん)", "条件 (じょうけん)"]
    },
    {
        kanji: "券",
        onReading: "ケン",
        kunReading: "",
        strokes: 8,
        grade: 5,
        session: 1,
        examples: ["切符 (きっぷ)", "商品券 (しょうひんけん)"]
    },
    {
        kanji: "険",
        onReading: "ケン",
        kunReading: "けわ-しい",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["危険 (きけん)", "険しい (けわしい)"]
    },
    {
        kanji: "検",
        onReading: "ケン",
        kunReading: "",
        strokes: 12,
        grade: 5,
        session: 1,
        examples: ["検査 (けんさ)", "点検 (てんけん)"]
    },
    {
        kanji: "限",
        onReading: "ゲン",
        kunReading: "かぎ-る",
        strokes: 9,
        grade: 5,
        session: 1,
        examples: ["制限 (せいげん)", "限界 (げんかい)"]
    },
    {
        kanji: "現",
        onReading: "ゲン",
        kunReading: "あらわ-れる",
        strokes: 11,
        grade: 5,
        session: 1,
        examples: ["現在 (げんざい)", "現実 (げんじつ)"]
    },
    {
        kanji: "減",
        onReading: "ゲン",
        kunReading: "へ-る、へ-らす",
        strokes: 12,
        grade: 5,
        session: 1,
        examples: ["減少 (げんしょう)", "削減 (さくげん)"]
    },
    {
        kanji: "故",
        onReading: "コ",
        kunReading: "ゆえ",
        strokes: 9,
        grade: 5,
        session: 2,
        examples: ["故障 (こしょう)", "事故 (じこ)"]
    },
    {
        kanji: "個",
        onReading: "コ、カ",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 2,
        examples: ["個人 (こじん)", "個性 (こせい)"]
    },
    {
        kanji: "護",
        onReading: "ゴ",
        kunReading: "まも-る",
        strokes: 20,
        grade: 5,
        session: 2,
        examples: ["保護 (ほご)", "護衛 (ごえい)"]
    },
    {
        kanji: "効",
        onReading: "コウ",
        kunReading: "き-く",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["効果 (こうか)", "有効 (ゆうこう)"]
    },
    {
        kanji: "厚",
        onReading: "コウ",
        kunReading: "あつ-い",
        strokes: 9,
        grade: 5,
        session: 2,
        examples: ["厚生 (こうせい)", "厚い (あつい)"]
    },
    {
        kanji: "耕",
        onReading: "コウ",
        kunReading: "たがや-す",
        strokes: 10,
        grade: 5,
        session: 2,
        examples: ["耕地 (こうち)", "耕す (たがやす)"]
    },
    {
        kanji: "鉱",
        onReading: "コウ",
        kunReading: "",
        strokes: 13,
        grade: 5,
        session: 2,
        examples: ["鉱山 (こうざん)", "鉱物 (こうぶつ)"]
    },
    {
        kanji: "構",
        onReading: "コウ",
        kunReading: "かま-える",
        strokes: 14,
        grade: 5,
        session: 2,
        examples: ["構造 (こうぞう)", "機構 (きこう)"]
    },
    {
        kanji: "興",
        onReading: "コウ、キョウ",
        kunReading: "おこ-る",
        strokes: 16,
        grade: 5,
        session: 2,
        examples: ["興味 (きょうみ)", "興奮 (こうふん)"]
    },
    {
        kanji: "講",
        onReading: "コウ",
        kunReading: "",
        strokes: 17,
        grade: 5,
        session: 2,
        examples: ["講義 (こうぎ)", "講演 (こうえん)"]
    },
    {
        kanji: "混",
        onReading: "コン",
        kunReading: "ま-ざる、ま-ぜる",
        strokes: 11,
        grade: 5,
        session: 2,
        examples: ["混乱 (こんらん)", "混ぜる (まぜる)"]
    },
    {
        kanji: "査",
        onReading: "サ",
        kunReading: "",
        strokes: 9,
        grade: 5,
        session: 2,
        examples: ["調査 (ちょうさ)", "検査 (けんさ)"]
    },
    {
        kanji: "再",
        onReading: "サイ、サ",
        kunReading: "ふたた-び",
        strokes: 6,
        grade: 5,
        session: 2,
        examples: ["再度 (さいど)", "再開 (さいかい)"]
    },
    {
        kanji: "災",
        onReading: "サイ",
        kunReading: "わざわ-い",
        strokes: 7,
        grade: 5,
        session: 2,
        examples: ["災害 (さいがい)", "防災 (ぼうさい)"]
    },
    {
        kanji: "妻",
        onReading: "サイ",
        kunReading: "つま",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["妻子 (さいし)", "夫妻 (ふさい)"]
    },
    {
        kanji: "採",
        onReading: "サイ",
        kunReading: "と-る",
        strokes: 11,
        grade: 5,
        session: 2,
        examples: ["採用 (さいよう)", "採点 (さいてん)"]
    },
    {
        kanji: "際",
        onReading: "サイ",
        kunReading: "きわ",
        strokes: 14,
        grade: 5,
        session: 2,
        examples: ["国際 (こくさい)", "実際 (じっさい)"]
    },
    {
        kanji: "在",
        onReading: "ザイ",
        kunReading: "あ-る",
        strokes: 6,
        grade: 5,
        session: 2,
        examples: ["存在 (そんざい)", "現在 (げんざい)"]
    },
    {
        kanji: "財",
        onReading: "ザイ、サイ",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 2,
        examples: ["財産 (ざいさん)", "財布 (さいふ)"]
    },
    {
        kanji: "罪",
        onReading: "ザイ",
        kunReading: "つみ",
        strokes: 13,
        grade: 5,
        session: 2,
        examples: ["犯罪 (はんざい)", "罪人 (ざいにん)"]
    },
    {
        kanji: "雑",
        onReading: "ザツ、ゾウ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 2,
        examples: ["雑誌 (ざっし)", "混雑 (こんざつ)"]
    },
    {
        kanji: "酸",
        onReading: "サン",
        kunReading: "す-い",
        strokes: 14,
        grade: 5,
        session: 2,
        examples: ["酸素 (さんそ)", "酸性 (さんせい)"]
    },
    {
        kanji: "賛",
        onReading: "サン",
        kunReading: "",
        strokes: 15,
        grade: 5,
        session: 2,
        examples: ["賛成 (さんせい)", "賛否 (さんぴ)"]
    },
    {
        kanji: "支",
        onReading: "シ",
        kunReading: "ささ-える",
        strokes: 4,
        grade: 5,
        session: 2,
        examples: ["支持 (しじ)", "支店 (してん)"]
    },
    {
        kanji: "志",
        onReading: "シ",
        kunReading: "こころざ-す",
        strokes: 7,
        grade: 5,
        session: 2,
        examples: ["志望 (しぼう)", "意志 (いし)"]
    },
    {
        kanji: "枝",
        onReading: "シ",
        kunReading: "えだ",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["枝葉 (しよう)", "枝分かれ (えだわかれ)"]
    },
    {
        kanji: "師",
        onReading: "シ",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 2,
        examples: ["教師 (きょうし)", "師匠 (ししょう)"]
    },
    {
        kanji: "資",
        onReading: "シ",
        kunReading: "",
        strokes: 13,
        grade: 5,
        session: 2,
        examples: ["資源 (しげん)", "資本 (しほん)"]
    },
    {
        kanji: "飼",
        onReading: "シ",
        kunReading: "か-う",
        strokes: 13,
        grade: 5,
        session: 2,
        examples: ["飼育 (しいく)", "飼う (かう)"]
    },
    {
        kanji: "示",
        onReading: "ジ、シ",
        kunReading: "しめ-す",
        strokes: 5,
        grade: 5,
        session: 2,
        examples: ["指示 (しじ)", "表示 (ひょうじ)"]
    },
    {
        kanji: "似",
        onReading: "ジ",
        kunReading: "に-る",
        strokes: 7,
        grade: 5,
        session: 2,
        examples: ["似顔絵 (にがおえ)", "類似 (るいじ)"]
    },
    {
        kanji: "識",
        onReading: "シキ",
        kunReading: "",
        strokes: 19,
        grade: 5,
        session: 2,
        examples: ["知識 (ちしき)", "意識 (いしき)"]
    },
    {
        kanji: "質",
        onReading: "シツ、シチ",
        kunReading: "",
        strokes: 15,
        grade: 5,
        session: 2,
        examples: ["質問 (しつもん)", "品質 (ひんしつ)"]
    },
    {
        kanji: "舎",
        onReading: "シャ",
        kunReading: "",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["宿舎 (しゅくしゃ)", "寮舎 (りょうしゃ)"]
    },
    {
        kanji: "謝",
        onReading: "シャ",
        kunReading: "あやま-る",
        strokes: 17,
        grade: 5,
        session: 2,
        examples: ["感謝 (かんしゃ)", "謝罪 (しゃざい)"]
    },
    {
        kanji: "授",
        onReading: "ジュ",
        kunReading: "さず-ける",
        strokes: 11,
        grade: 5,
        session: 2,
        examples: ["授業 (じゅぎょう)", "教授 (きょうじゅ)"]
    },
    {
        kanji: "修",
        onReading: "シュウ、シュ",
        kunReading: "おさ-める",
        strokes: 10,
        grade: 5,
        session: 2,
        examples: ["修理 (しゅうり)", "修行 (しゅぎょう)"]
    },
    {
        kanji: "述",
        onReading: "ジュツ",
        kunReading: "の-べる",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["記述 (きじゅつ)", "述べる (のべる)"]
    },
    {
        kanji: "術",
        onReading: "ジュツ",
        kunReading: "",
        strokes: 11,
        grade: 5,
        session: 2,
        examples: ["技術 (ぎじゅつ)", "芸術 (げいじゅつ)"]
    },
    {
        kanji: "準",
        onReading: "ジュン",
        kunReading: "",
        strokes: 13,
        grade: 5,
        session: 2,
        examples: ["標準 (ひょうじゅん)", "準備 (じゅんび)"]
    },
    {
        kanji: "序",
        onReading: "ジョ",
        kunReading: "",
        strokes: 7,
        grade: 5,
        session: 2,
        examples: ["序文 (じょぶん)", "秩序 (ちつじょ)"]
    },
    {
        kanji: "招",
        onReading: "ショウ",
        kunReading: "まね-く",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["招待 (しょうたい)", "招く (まねく)"]
    },
    {
        kanji: "承",
        onReading: "ショウ",
        kunReading: "うけたまわ-る",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["承認 (しょうにん)", "承知 (しょうち)"]
    },
    {
        kanji: "証",
        onReading: "ショウ",
        kunReading: "あかし",
        strokes: 12,
        grade: 5,
        session: 2,
        examples: ["証明 (しょうめい)", "保証 (ほしょう)"]
    },
    {
        kanji: "条",
        onReading: "ジョウ",
        kunReading: "",
        strokes: 7,
        grade: 5,
        session: 2,
        examples: ["条件 (じょうけん)", "条約 (じょうやく)"]
    },
    {
        kanji: "状",
        onReading: "ジョウ",
        kunReading: "",
        strokes: 7,
        grade: 5,
        session: 2,
        examples: ["状態 (じょうたい)", "現状 (げんじょう)"]
    },
    {
        kanji: "常",
        onReading: "ジョウ",
        kunReading: "つね",
        strokes: 11,
        grade: 5,
        session: 2,
        examples: ["常識 (じょうしき)", "非常 (ひじょう)"]
    },
    {
        kanji: "情",
        onReading: "ジョウ、セイ",
        kunReading: "なさ-け",
        strokes: 11,
        grade: 5,
        session: 2,
        examples: ["感情 (かんじょう)", "事情 (じじょう)"]
    },
    {
        kanji: "織",
        onReading: "ショク、シキ",
        kunReading: "お-る",
        strokes: 18,
        grade: 5,
        session: 2,
        examples: ["織物 (おりもの)", "組織 (そしき)"]
    },
    {
        kanji: "職",
        onReading: "ショク",
        kunReading: "",
        strokes: 18,
        grade: 5,
        session: 2,
        examples: ["職業 (しょくぎょう)", "就職 (しゅうしょく)"]
    },
    {
        kanji: "制",
        onReading: "セイ",
        kunReading: "",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["制度 (せいど)", "統制 (とうせい)"]
    },
    {
        kanji: "性",
        onReading: "セイ、ショウ",
        kunReading: "",
        strokes: 8,
        grade: 5,
        session: 2,
        examples: ["性格 (せいかく)", "性質 (せいしつ)"]
    },
    {
        kanji: "政",
        onReading: "セイ、ショウ",
        kunReading: "まつりごと",
        strokes: 9,
        grade: 5,
        session: 2,
        examples: ["政治 (せいじ)", "政府 (せいふ)"]
    },
    {
        kanji: "勢",
        onReading: "セイ",
        kunReading: "いきお-い",
        strokes: 13,
        grade: 5,
        session: 3,
        examples: ["勢力 (せいりょく)", "情勢 (じょうせい)"]
    },
    {
        kanji: "精",
        onReading: "セイ、ショウ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["精神 (せいしん)", "精密 (せいみつ)"]
    },
    {
        kanji: "製",
        onReading: "セイ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["製品 (せいひん)", "製造 (せいぞう)"]
    },
    {
        kanji: "税",
        onReading: "ゼイ",
        kunReading: "",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["税金 (ぜいきん)", "所得税 (しょとくぜい)"]
    },
    {
        kanji: "責",
        onReading: "セキ",
        kunReading: "せ-める",
        strokes: 11,
        grade: 5,
        session: 3,
        examples: ["責任 (せきにん)", "責める (せめる)"]
    },
    {
        kanji: "績",
        onReading: "セキ",
        kunReading: "",
        strokes: 17,
        grade: 5,
        session: 3,
        examples: ["成績 (せいせき)", "実績 (じっせき)"]
    },
    {
        kanji: "接",
        onReading: "セツ",
        kunReading: "つ-ぐ",
        strokes: 11,
        grade: 5,
        session: 3,
        examples: ["接続 (せつぞく)", "直接 (ちょくせつ)"]
    },
    {
        kanji: "設",
        onReading: "セツ",
        kunReading: "もう-ける",
        strokes: 11,
        grade: 5,
        session: 3,
        examples: ["設計 (せっけい)", "施設 (しせつ)"]
    },
    {
        kanji: "舌",
        onReading: "ゼツ",
        kunReading: "した",
        strokes: 6,
        grade: 5,
        session: 3,
        examples: ["舌打ち (したうち)", "方言 (ほうげん)"]
    },
    {
        kanji: "絶",
        onReading: "ゼツ",
        kunReading: "た-える、た-やす",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["絶対 (ぜったい)", "絶望 (ぜつぼう)"]
    },
    {
        kanji: "銭",
        onReading: "セン",
        kunReading: "ぜに",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["銭湯 (せんとう)", "小銭 (こぜに)"]
    },
    {
        kanji: "祖",
        onReading: "ソ",
        kunReading: "",
        strokes: 9,
        grade: 5,
        session: 3,
        examples: ["祖先 (そせん)", "先祖 (せんぞ)"]
    },
    {
        kanji: "素",
        onReading: "ソ、ス",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 3,
        examples: ["素材 (そざい)", "素直 (すなお)"]
    },
    {
        kanji: "総",
        onReading: "ソウ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["総理 (そうり)", "総合 (そうごう)"]
    },
    {
        kanji: "造",
        onReading: "ゾウ",
        kunReading: "つく-る",
        strokes: 10,
        grade: 5,
        session: 3,
        examples: ["造船 (ぞうせん)", "製造 (せいぞう)"]
    },
    {
        kanji: "像",
        onReading: "ゾウ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["映像 (えいぞう)", "想像 (そうぞう)"]
    },
    {
        kanji: "増",
        onReading: "ゾウ",
        kunReading: "ま-す、ふ-える",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["増加 (ぞうか)", "増える (ふえる)"]
    },
    {
        kanji: "則",
        onReading: "ソク",
        kunReading: "",
        strokes: 9,
        grade: 5,
        session: 3,
        examples: ["規則 (きそく)", "法則 (ほうそく)"]
    },
    {
        kanji: "測",
        onReading: "ソク",
        kunReading: "はか-る",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["測定 (そくてい)", "予測 (よそく)"]
    },
    {
        kanji: "属",
        onReading: "ゾク",
        kunReading: "",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["所属 (しょぞく)", "属性 (ぞくせい)"]
    },
    {
        kanji: "率",
        onReading: "ソツ、リツ",
        kunReading: "ひき-いる",
        strokes: 11,
        grade: 5,
        session: 3,
        examples: ["効率 (こうりつ)", "確率 (かくりつ)"]
    },
    {
        kanji: "損",
        onReading: "ソン",
        kunReading: "そこ-なう",
        strokes: 13,
        grade: 5,
        session: 3,
        examples: ["損害 (そんがい)", "損失 (そんしつ)"]
    },
    {
        kanji: "退",
        onReading: "タイ",
        kunReading: "しりぞ-く",
        strokes: 9,
        grade: 5,
        session: 3,
        examples: ["退学 (たいがく)", "引退 (いんたい)"]
    },
    {
        kanji: "貸",
        onReading: "タイ",
        kunReading: "か-す",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["貸出 (かしだし)", "貸す (かす)"]
    },
    {
        kanji: "態",
        onReading: "タイ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["態度 (たいど)", "状態 (じょうたい)"]
    },
    {
        kanji: "団",
        onReading: "ダン、トン",
        kunReading: "",
        strokes: 6,
        grade: 5,
        session: 3,
        examples: ["団体 (だんたい)", "集団 (しゅうだん)"]
    },
    {
        kanji: "断",
        onReading: "ダン",
        kunReading: "た-つ、ことわ-る",
        strokes: 11,
        grade: 5,
        session: 3,
        examples: ["断る (ことわる)", "判断 (はんだん)"]
    },
    {
        kanji: "築",
        onReading: "チク",
        kunReading: "きず-く",
        strokes: 16,
        grade: 5,
        session: 3,
        examples: ["建築 (けんちく)", "築く (きずく)"]
    },
    {
        kanji: "張",
        onReading: "チョウ",
        kunReading: "は-る",
        strokes: 11,
        grade: 5,
        session: 3,
        examples: ["張る (はる)", "緊張 (きんちょう)"]
    },
    {
        kanji: "提",
        onReading: "テイ",
        kunReading: "さ-げる",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["提案 (ていあん)", "提出 (ていしゅつ)"]
    },
    {
        kanji: "程",
        onReading: "テイ",
        kunReading: "ほど",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["程度 (ていど)", "日程 (にってい)"]
    },
    {
        kanji: "適",
        onReading: "テキ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["適当 (てきとう)", "適切 (てきせつ)"]
    },
    {
        kanji: "敵",
        onReading: "テキ",
        kunReading: "かたき",
        strokes: 15,
        grade: 5,
        session: 3,
        examples: ["敵対 (てきたい)", "敵 (てき)"]
    },
    {
        kanji: "統",
        onReading: "トウ",
        kunReading: "す-べる",
        strokes: 12,
        grade: 5,
        session: 3,
        examples: ["統一 (とういつ)", "統計 (とうけい)"]
    },
    {
        kanji: "銅",
        onReading: "ドウ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["銅像 (どうぞう)", "銅メダル (どうメダル)"]
    },
    {
        kanji: "導",
        onReading: "ドウ",
        kunReading: "みちび-く",
        strokes: 15,
        grade: 5,
        session: 3,
        examples: ["指導 (しどう)", "導入 (どうにゅう)"]
    },
    {
        kanji: "徳",
        onReading: "トク",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 3,
        examples: ["道徳 (どうとく)", "徳育 (とくいく)"]
    },
    {
        kanji: "独",
        onReading: "ドク",
        kunReading: "ひと-り",
        strokes: 9,
        grade: 5,
        session: 3,
        examples: ["独立 (どくりつ)", "独自 (どくじ)"]
    },
    {
        kanji: "任",
        onReading: "ニン",
        kunReading: "まか-せる",
        strokes: 6,
        grade: 5,
        session: 3,
        examples: ["責任 (せきにん)", "任務 (にんむ)"]
    },
    {
        kanji: "燃",
        onReading: "ネン",
        kunReading: "も-える、も-やす",
        strokes: 16,
        grade: 5,
        session: 3,
        examples: ["燃料 (ねんりょう)", "燃える (もえる)"]
    },
    {
        kanji: "能",
        onReading: "ノウ",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 3,
        examples: ["能力 (のうりょく)", "可能 (かのう)"]
    },
    {
        kanji: "破",
        onReading: "ハ",
        kunReading: "やぶ-る",
        strokes: 10,
        grade: 5,
        session: 4,
        examples: ["破壊 (はかい)", "破る (やぶる)"]
    },
    {
        kanji: "犯",
        onReading: "ハン",
        kunReading: "おか-す",
        strokes: 5,
        grade: 5,
        session: 4,
        examples: ["犯罪 (はんざい)", "違犯 (いはん)"]
    },
    {
        kanji: "判",
        onReading: "ハン、バン",
        kunReading: "わか-る",
        strokes: 7,
        grade: 5,
        session: 4,
        examples: ["判断 (はんだん)", "裁判 (さいばん)"]
    },
    {
        kanji: "版",
        onReading: "ハン",
        kunReading: "",
        strokes: 8,
        grade: 5,
        session: 4,
        examples: ["出版 (しゅっぱん)", "版画 (はんが)"]
    },
    {
        kanji: "比",
        onReading: "ヒ",
        kunReading: "くら-べる",
        strokes: 4,
        grade: 5,
        session: 4,
        examples: ["比較 (ひかく)", "比べる (くらべる)"]
    },
    {
        kanji: "肥",
        onReading: "ヒ",
        kunReading: "こ-える",
        strokes: 8,
        grade: 5,
        session: 4,
        examples: ["肥料 (ひりょう)", "肥える (こえる)"]
    },
    {
        kanji: "非",
        onReading: "ヒ",
        kunReading: "",
        strokes: 8,
        grade: 5,
        session: 4,
        examples: ["非常 (ひじょう)", "是非 (ぜひ)"]
    },
    {
        kanji: "備",
        onReading: "ビ",
        kunReading: "そな-える",
        strokes: 12,
        grade: 5,
        session: 4,
        examples: ["準備 (じゅんび)", "設備 (せつび)"]
    },
    {
        kanji: "俵",
        onReading: "ヒョウ",
        kunReading: "たわら",
        strokes: 10,
        grade: 5,
        session: 4,
        examples: ["土俵 (どひょう)", "俵 (たわら)"]
    },
    {
        kanji: "評",
        onReading: "ヒョウ",
        kunReading: "",
        strokes: 12,
        grade: 5,
        session: 4,
        examples: ["評価 (ひょうか)", "批評 (ひひょう)"]
    },
    {
        kanji: "貧",
        onReading: "ヒン、ビン",
        kunReading: "まず-しい",
        strokes: 11,
        grade: 5,
        session: 4,
        examples: ["貧困 (ひんこん)", "貧しい (まずしい)"]
    },
    {
        kanji: "布",
        onReading: "フ",
        kunReading: "ぬの",
        strokes: 5,
        grade: 5,
        session: 4,
        examples: ["布団 (ふとん)", "毛布 (もうふ)"]
    },
    {
        kanji: "婦",
        onReading: "フ",
        kunReading: "",
        strokes: 11,
        grade: 5,
        session: 4,
        examples: ["主婦 (しゅふ)", "夫婦 (ふうふ)"]
    },
    {
        kanji: "富",
        onReading: "フ、フウ",
        kunReading: "と-む",
        strokes: 12,
        grade: 5,
        session: 4,
        examples: ["富士山 (ふじさん)", "豊富 (ほうふ)"]
    },
    {
        kanji: "武",
        onReading: "ブ、ム",
        kunReading: "たけ",
        strokes: 8,
        grade: 5,
        session: 4,
        examples: ["武器 (ぶき)", "武道 (ぶどう)"]
    },
    {
        kanji: "復",
        onReading: "フク",
        kunReading: "",
        strokes: 12,
        grade: 5,
        session: 4,
        examples: ["回復 (かいふく)", "復習 (ふくしゅう)"]
    },
    {
        kanji: "複",
        onReading: "フク",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 4,
        examples: ["複数 (ふくすう)", "複雑 (ふくざつ)"]
    },
    {
        kanji: "仏",
        onReading: "ブツ、フツ",
        kunReading: "ほとけ",
        strokes: 4,
        grade: 5,
        session: 4,
        examples: ["仏教 (ぶっきょう)", "仏像 (ぶつぞう)"]
    },
    {
        kanji: "編",
        onReading: "ヘン",
        kunReading: "あ-む",
        strokes: 15,
        grade: 5,
        session: 4,
        examples: ["編集 (へんしゅう)", "編む (あむ)"]
    },
    {
        kanji: "弁",
        onReading: "ベン",
        kunReading: "",
        strokes: 5,
        grade: 5,
        session: 4,
        examples: ["弁当 (べんとう)", "弁護士 (べんごし)"]
    },
    {
        kanji: "保",
        onReading: "ホ",
        kunReading: "たも-つ",
        strokes: 9,
        grade: 5,
        session: 4,
        examples: ["保護 (ほご)", "保険 (ほけん)"]
    },
    {
        kanji: "墓",
        onReading: "ボ",
        kunReading: "はか",
        strokes: 13,
        grade: 5,
        session: 4,
        examples: ["墓地 (ぼち)", "お墓 (おはか)"]
    },
    {
        kanji: "報",
        onReading: "ホウ",
        kunReading: "むく-いる",
        strokes: 12,
        grade: 5,
        session: 4,
        examples: ["報告 (ほうこく)", "情報 (じょうほう)"]
    },
    {
        kanji: "豊",
        onReading: "ホウ",
        kunReading: "ゆた-か",
        strokes: 13,
        grade: 5,
        session: 4,
        examples: ["豊富 (ほうふ)", "豊か (ゆたか)"]
    },
    {
        kanji: "防",
        onReading: "ボウ",
        kunReading: "ふせ-ぐ",
        strokes: 7,
        grade: 5,
        session: 4,
        examples: ["防止 (ぼうし)", "防ぐ (ふせぐ)"]
    },
    {
        kanji: "貿",
        onReading: "ボウ",
        kunReading: "",
        strokes: 12,
        grade: 5,
        session: 4,
        examples: ["貿易 (ぼうえき)", "通商貿易 (つうしょうぼうえき)"]
    },
    {
        kanji: "暴",
        onReading: "ボウ、バク",
        kunReading: "あば-れる",
        strokes: 15,
        grade: 5,
        session: 4,
        examples: ["暴力 (ぼうりょく)", "暴走 (ぼうそう)"]
    },
    {
        kanji: "務",
        onReading: "ム",
        kunReading: "つと-める",
        strokes: 11,
        grade: 5,
        session: 4,
        examples: ["任務 (にんむ)", "事務 (じむ)"]
    },
    {
        kanji: "夢",
        onReading: "ム",
        kunReading: "ゆめ",
        strokes: 13,
        grade: 5,
        session: 4,
        examples: ["夢中 (むちゅう)", "夢 (ゆめ)"]
    },
    {
        kanji: "迷",
        onReading: "メイ",
        kunReading: "まよ-う",
        strokes: 9,
        grade: 5,
        session: 4,
        examples: ["迷惑 (めいわく)", "迷う (まよう)"]
    },
    {
        kanji: "綿",
        onReading: "メン",
        kunReading: "わた",
        strokes: 14,
        grade: 5,
        session: 4,
        examples: ["綿花 (めんか)", "綿 (わた)"]
    },
    {
        kanji: "輸",
        onReading: "ユ",
        kunReading: "",
        strokes: 16,
        grade: 5,
        session: 4,
        examples: ["輸出 (ゆしゅつ)", "輸入 (ゆにゅう)"]
    },
    {
        kanji: "余",
        onReading: "ヨ",
        kunReading: "あま-る",
        strokes: 7,
        grade: 5,
        session: 4,
        examples: ["余分 (よぶん)", "余る (あまる)"]
    },
    {
        kanji: "預",
        onReading: "ヨ",
        kunReading: "あず-ける",
        strokes: 13,
        grade: 5,
        session: 4,
        examples: ["預金 (よきん)", "預ける (あずける)"]
    },
    {
        kanji: "容",
        onReading: "ヨウ",
        kunReading: "",
        strokes: 10,
        grade: 5,
        session: 4,
        examples: ["容易 (ようい)", "内容 (ないよう)"]
    },
    {
        kanji: "略",
        onReading: "リャク",
        kunReading: "",
        strokes: 11,
        grade: 5,
        session: 4,
        examples: ["略語 (りゃくご)", "省略 (しょうりゃく)"]
    },
    {
        kanji: "留",
        onReading: "リュウ、ル",
        kunReading: "と-める",
        strokes: 10,
        grade: 5,
        session: 4,
        examples: ["留学 (りゅうがく)", "保留 (ほりゅう)"]
    },
    {
        kanji: "領",
        onReading: "リョウ",
        kunReading: "",
        strokes: 14,
        grade: 5,
        session: 4,
        examples: ["領土 (りょうど)", "領域 (りょういき)"]
    },
    {
        kanji: "異",
        onReading: "イ",
        kunReading: "こと-なる",
        strokes: 13,
        grade: 6,
        session: 1,
        examples: ["異常 (いじょう)", "異なる (ことなる)"]
    },
    {
        kanji: "遺",
        onReading: "イ",
        kunReading: "",
        strokes: 15,
        grade: 6,
        session: 1,
        examples: ["遺跡 (いせき)", "遺産 (いさん)"]
    },
    {
        kanji: "域",
        onReading: "イキ",
        kunReading: "",
        strokes: 11,
        grade: 6,
        session: 1,
        examples: ["地域 (ちいき)", "領域 (りょういき)"]
    },
    {
        kanji: "宇",
        onReading: "ウ",
        kunReading: "",
        strokes: 6,
        grade: 6,
        session: 1,
        examples: ["宇宙 (うちゅう)", "宇宙飛行士 (うちゅうひこうし)"]
    },
    {
        kanji: "映",
        onReading: "エイ",
        kunReading: "うつ-る、うつ-す",
        strokes: 9,
        grade: 6,
        session: 1,
        examples: ["映画 (えいが)", "反映 (はんえい)"]
    },
    {
        kanji: "延",
        onReading: "エン",
        kunReading: "の-びる、の-べる",
        strokes: 8,
        grade: 6,
        session: 1,
        examples: ["延長 (えんちょう)", "延期 (えんき)"]
    },
    {
        kanji: "沿",
        onReading: "エン",
        kunReading: "そ-う",
        strokes: 8,
        grade: 6,
        session: 1,
        examples: ["沿岸 (えんがん)", "沿線 (えんせん)"]
    },
    {
        kanji: "我",
        onReading: "ガ",
        kunReading: "われ、わ",
        strokes: 7,
        grade: 6,
        session: 1,
        examples: ["我々 (われわれ)", "自我 (じが)"]
    },
    {
        kanji: "灰",
        onReading: "カイ",
        kunReading: "はい",
        strokes: 6,
        grade: 6,
        session: 1,
        examples: ["灰色 (はいいろ)", "火山灰 (かざんばい)"]
    },
    {
        kanji: "拡",
        onReading: "カク",
        kunReading: "ひろ-がる、ひろ-げる",
        strokes: 8,
        grade: 6,
        session: 1,
        examples: ["拡大 (かくだい)", "拡張 (かくちょう)"]
    },
    {
        kanji: "革",
        onReading: "カク",
        kunReading: "かわ",
        strokes: 9,
        grade: 6,
        session: 1,
        examples: ["革命 (かくめい)", "革新 (かくしん)"]
    },
    {
        kanji: "閣",
        onReading: "カク",
        kunReading: "",
        strokes: 14,
        grade: 6,
        session: 1,
        examples: ["内閣 (ないかく)", "閣僚 (かくりょう)"]
    },
    {
        kanji: "割",
        onReading: "カツ",
        kunReading: "わ-る、わ-れる",
        strokes: 12,
        grade: 6,
        session: 1,
        examples: ["割合 (わりあい)", "分割 (ぶんかつ)"]
    },
    {
        kanji: "株",
        onReading: "シュ",
        kunReading: "かぶ",
        strokes: 10,
        grade: 6,
        session: 1,
        examples: ["株式 (かぶしき)", "株主 (かぶぬし)"]
    },
    {
        kanji: "干",
        onReading: "カン",
        kunReading: "ほ-す",
        strokes: 3,
        grade: 6,
        session: 1,
        examples: ["干潮 (かんちょう)", "乾燥 (かんそう)"]
    },
    {
        kanji: "巻",
        onReading: "カン",
        kunReading: "ま-く",
        strokes: 9,
        grade: 6,
        session: 1,
        examples: ["巻物 (まきもの)", "上巻 (じょうかん)"]
    },
    {
        kanji: "看",
        onReading: "カン",
        kunReading: "み-る",
        strokes: 9,
        grade: 6,
        session: 1,
        examples: ["看護 (かんご)", "看板 (かんばん)"]
    },
    {
        kanji: "簡",
        onReading: "カン",
        kunReading: "",
        strokes: 18,
        grade: 6,
        session: 1,
        examples: ["簡単 (かんたん)", "簡素 (かんそ)"]
    },
    {
        kanji: "危",
        onReading: "キ",
        kunReading: "あぶ-ない",
        strokes: 6,
        grade: 6,
        session: 1,
        examples: ["危険 (きけん)", "危機 (きき)"]
    },
    {
        kanji: "机",
        onReading: "キ",
        kunReading: "つくえ",
        strokes: 6,
        grade: 6,
        session: 1,
        examples: ["机上 (きじょう)", "学習机 (がくしゅうづくえ)"]
    },
    {
        kanji: "揮",
        onReading: "キ",
        kunReading: "",
        strokes: 12,
        grade: 6,
        session: 1,
        examples: ["挥発 (きはつ)", "指揮 (しき)"]
    },
    {
        kanji: "貴",
        onReading: "キ",
        kunReading: "たっと-い、とうと-い",
        strokes: 12,
        grade: 6,
        session: 1,
        examples: ["貴重 (きちょう)", "高貴 (こうき)"]
    },
    {
        kanji: "疑",
        onReading: "ギ",
        kunReading: "うたが-う",
        strokes: 14,
        grade: 6,
        session: 1,
        examples: ["疑問 (ぎもん)", "疑う (うたがう)"]
    },
    {
        kanji: "吸",
        onReading: "キュウ",
        kunReading: "す-う",
        strokes: 6,
        grade: 6,
        session: 1,
        examples: ["吸収 (きゅうしゅう)", "吸う (すう)"]
    },
    {
        kanji: "供",
        onReading: "キョウ、ク",
        kunReading: "そな-える、とも",
        strokes: 8,
        grade: 6,
        session: 1,
        examples: ["供給 (きょうきゅう)", "子供 (こども)"]
    },
    {
        kanji: "胸",
        onReading: "キョウ",
        kunReading: "むね、むな",
        strokes: 10,
        grade: 6,
        session: 1,
        examples: ["胸部 (きょうぶ)", "胸 (むね)"]
    },
    {
        kanji: "郷",
        onReading: "キョウ、ゴウ",
        kunReading: "",
        strokes: 11,
        grade: 6,
        session: 1,
        examples: ["郷土 (きょうど)", "故郷 (こきょう)"]
    },
    {
        kanji: "勤",
        onReading: "キン、ゴン",
        kunReading: "つと-める",
        strokes: 12,
        grade: 6,
        session: 1,
        examples: ["勤務 (きんむ)", "勤勉 (きんべん)"]
    },
    {
        kanji: "筋",
        onReading: "キン",
        kunReading: "すじ",
        strokes: 12,
        grade: 6,
        session: 1,
        examples: ["筋肉 (きんにく)", "血筋 (ちすじ)"]
    },
    {
        kanji: "系",
        onReading: "ケイ",
        kunReading: "",
        strokes: 7,
        grade: 6,
        session: 1,
        examples: ["系統 (けいとう)", "体系 (たいけい)"]
    },
    {
        kanji: "敬",
        onReading: "ケイ",
        kunReading: "うやま-う",
        strokes: 12,
        grade: 6,
        session: 1,
        examples: ["敬語 (けいご)", "尊敬 (そんけい)"]
    },
    {
        kanji: "警",
        onReading: "ケイ",
        kunReading: "",
        strokes: 19,
        grade: 6,
        session: 1,
        examples: ["警察 (けいさつ)", "警報 (けいほう)"]
    },
    {
        kanji: "劇",
        onReading: "ゲキ",
        kunReading: "",
        strokes: 15,
        grade: 6,
        session: 1,
        examples: ["演劇 (えんげき)", "劇場 (げきじょう)"]
    },
    {
        kanji: "激",
        onReading: "ゲキ",
        kunReading: "はげ-しい",
        strokes: 16,
        grade: 6,
        session: 1,
        examples: ["激しい (はげしい)", "激流 (げきりゅう)"]
    },
    {
        kanji: "穴",
        onReading: "ケツ",
        kunReading: "あな",
        strokes: 5,
        grade: 6,
        session: 1,
        examples: ["穴 (あな)", "洞穴 (どうけつ)"]
    },
    {
        kanji: "絹",
        onReading: "ケン",
        kunReading: "きぬ",
        strokes: 13,
        grade: 6,
        session: 1,
        examples: ["絹糸 (きぬいと)", "絹織物 (きぬおりもの)"]
    },
    {
        kanji: "権",
        onReading: "ケン、ゴン",
        kunReading: "",
        strokes: 15,
        grade: 6,
        session: 1,
        examples: ["権利 (けんり)", "人権 (じんけん)"]
    },
    {
        kanji: "憲",
        onReading: "ケン",
        kunReading: "",
        strokes: 16,
        grade: 6,
        session: 1,
        examples: ["憲法 (けんぽう)", "立憲 (りっけん)"]
    },
    {
        kanji: "源",
        onReading: "ゲン",
        kunReading: "みなもと",
        strokes: 13,
        grade: 6,
        session: 1,
        examples: ["源流 (げんりゅう)", "電源 (でんげん)"]
    },
    {
        kanji: "厳",
        onReading: "ゲン、ゴン",
        kunReading: "きび-しい",
        strokes: 17,
        grade: 6,
        session: 1,
        examples: ["厳重 (げんじゅう)", "厳しい (きびしい)"]
    },
    {
        kanji: "己",
        onReading: "コ、キ",
        kunReading: "おのれ",
        strokes: 3,
        grade: 6,
        session: 1,
        examples: ["自己 (じこ)", "己れ (おのれ)"]
    },
    {
        kanji: "呼",
        onReading: "コ",
        kunReading: "よ-ぶ",
        strokes: 8,
        grade: 6,
        session: 1,
        examples: ["呼吸 (こきゅう)", "呼ぶ (よぶ)"]
    },
    {
        kanji: "誤",
        onReading: "ゴ",
        kunReading: "あやま-る",
        strokes: 14,
        grade: 6,
        session: 1,
        examples: ["誤解 (ごかい)", "誤る (あやまる)"]
    },
    {
        kanji: "后",
        onReading: "コウ、ゴウ",
        kunReading: "きさき",
        strokes: 6,
        grade: 6,
        session: 1,
        examples: ["皇后 (こうごう)", "后妃 (こうひ)"]
    },
    {
        kanji: "孝",
        onReading: "コウ",
        kunReading: "",
        strokes: 7,
        grade: 6,
        session: 1,
        examples: ["孝行 (こうこう)", "親孝行 (おやこうこう)"]
    },
    {
        kanji: "皇",
        onReading: "コウ、オウ",
        kunReading: "",
        strokes: 9,
        grade: 6,
        session: 1,
        examples: ["皇室 (こうしつ)", "天皇 (てんのう)"]
    },
    {
        kanji: "紅",
        onReading: "コウ、ク",
        kunReading: "べに、くれない",
        strokes: 9,
        grade: 6,
        session: 1,
        examples: ["紅葉 (こうよう)", "紅茶 (こうちゃ)"]
    },
    {
        kanji: "降",
        onReading: "コウ",
        kunReading: "お-りる、ふ-る",
        strokes: 10,
        grade: 6,
        session: 1,
        examples: ["降車 (こうしゃ)", "降雨 (こうう)"]
    },
    {
        kanji: "鋼",
        onReading: "コウ",
        kunReading: "はがね",
        strokes: 16,
        grade: 6,
        session: 1,
        examples: ["鋼鉄 (こうてつ)", "製鋼 (せいこう)"]
    },
    {
        kanji: "刻",
        onReading: "コク",
        kunReading: "きざ-む",
        strokes: 8,
        grade: 6,
        session: 1,
        examples: ["時刻 (じこく)", "刻む (きざむ)"]
    },
    {
        kanji: "穀",
        onReading: "コク",
        kunReading: "",
        strokes: 14,
        grade: 6,
        session: 1,
        examples: ["穀物 (こくもつ)", "五穀 (ごこく)"]
    },
    {
        kanji: "骨",
        onReading: "コツ",
        kunReading: "ほね",
        strokes: 10,
        grade: 6,
        session: 1,
        examples: ["骨折 (こっせつ)", "背骨 (せぼね)"]
    },
    {
        kanji: "困",
        onReading: "コン",
        kunReading: "こま-る",
        strokes: 7,
        grade: 6,
        session: 1,
        examples: ["困難 (こんなん)", "困る (こまる)"]
    },
    {
        kanji: "砂",
        onReading: "サ、シャ",
        kunReading: "すな",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["砂漠 (さばく)", "砂浜 (すなはま)"]
    },
    {
        kanji: "座",
        onReading: "ザ",
        kunReading: "すわ-る",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["座席 (ざせき)", "正座 (せいざ)"]
    },
    {
        kanji: "済",
        onReading: "サイ",
        kunReading: "す-む、す-ます",
        strokes: 11,
        grade: 6,
        session: 2,
        examples: ["経済 (けいざい)", "済む (すむ)"]
    },
    {
        kanji: "裁",
        onReading: "サイ",
        kunReading: "さば-く、た-つ",
        strokes: 12,
        grade: 6,
        session: 2,
        examples: ["裁判 (さいばん)", "裁縫 (さいほう)"]
    },
    {
        kanji: "策",
        onReading: "サク",
        kunReading: "",
        strokes: 12,
        grade: 6,
        session: 2,
        examples: ["政策 (せいさく)", "対策 (たいさく)"]
    },
    {
        kanji: "冊",
        onReading: "サツ、サク",
        kunReading: "",
        strokes: 5,
        grade: 6,
        session: 2,
        examples: ["冊子 (さっし)", "図冊 (ずさつ)"]
    },
    {
        kanji: "蚕",
        onReading: "サン",
        kunReading: "かいこ",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["養蚕 (ようさん)", "蚕糸 (さんし)"]
    },
    {
        kanji: "至",
        onReading: "シ",
        kunReading: "いた-る",
        strokes: 6,
        grade: 6,
        session: 2,
        examples: ["至急 (しきゅう)", "到至 (とうし)"]
    },
    {
        kanji: "私",
        onReading: "シ",
        kunReading: "わたし、わたくし",
        strokes: 7,
        grade: 6,
        session: 2,
        examples: ["私立 (しりつ)", "私語 (しご)"]
    },
    {
        kanji: "姿",
        onReading: "シ",
        kunReading: "すがた",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["姿勢 (しせい)", "容姿 (ようし)"]
    },
    {
        kanji: "視",
        onReading: "シ",
        kunReading: "み-る",
        strokes: 11,
        grade: 6,
        session: 2,
        examples: ["視力 (しりょく)", "監視 (かんし)"]
    },
    {
        kanji: "詞",
        onReading: "シ",
        kunReading: "ことば",
        strokes: 12,
        grade: 6,
        session: 2,
        examples: ["動詞 (どうし)", "形容詞 (けいようし)"]
    },
    {
        kanji: "誌",
        onReading: "シ",
        kunReading: "",
        strokes: 14,
        grade: 6,
        session: 2,
        examples: ["雑誌 (ざっし)", "日誌 (にっし)"]
    },
    {
        kanji: "磁",
        onReading: "ジ",
        kunReading: "",
        strokes: 14,
        grade: 6,
        session: 2,
        examples: ["磁石 (じしゃく)", "磁気 (じき)"]
    },
    {
        kanji: "射",
        onReading: "シャ",
        kunReading: "い-る",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["射撃 (しゃげき)", "注射 (ちゅうしゃ)"]
    },
    {
        kanji: "捨",
        onReading: "シャ",
        kunReading: "す-てる",
        strokes: 11,
        grade: 6,
        session: 2,
        examples: ["捨てる (すてる)", "放捨 (ほうしゃ)"]
    },
    {
        kanji: "尺",
        onReading: "シャク",
        kunReading: "",
        strokes: 4,
        grade: 6,
        session: 2,
        examples: ["尺度 (しゃくど)", "物差し (ものさし)"]
    },
    {
        kanji: "若",
        onReading: "ジャク、ニャク",
        kunReading: "わか-い",
        strokes: 8,
        grade: 6,
        session: 2,
        examples: ["若者 (わかもの)", "若い (わかい)"]
    },
    {
        kanji: "樹",
        onReading: "ジュ",
        kunReading: "き",
        strokes: 16,
        grade: 6,
        session: 2,
        examples: ["樹木 (じゅもく)", "植樹 (しょくじゅ)"]
    },
    {
        kanji: "収",
        onReading: "シュウ",
        kunReading: "おさ-める",
        strokes: 4,
        grade: 6,
        session: 2,
        examples: ["収入 (しゅうにゅう)", "収穫 (しゅうかく)"]
    },
    {
        kanji: "宗",
        onReading: "シュウ、ソウ",
        kunReading: "",
        strokes: 8,
        grade: 6,
        session: 2,
        examples: ["宗教 (しゅうきょう)", "宗派 (しゅうは)"]
    },
    {
        kanji: "就",
        onReading: "シュウ、ジュ",
        kunReading: "つ-く",
        strokes: 12,
        grade: 6,
        session: 2,
        examples: ["就職 (しゅうしょく)", "就任 (しゅうにん)"]
    },
    {
        kanji: "衆",
        onReading: "シュウ、シュ",
        kunReading: "",
        strokes: 12,
        grade: 6,
        session: 2,
        examples: ["民衆 (みんしゅう)", "大衆 (たいしゅう)"]
    },
    {
        kanji: "従",
        onReading: "ジュウ、ショウ",
        kunReading: "したが-う",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["従業員 (じゅうぎょういん)", "従う (したがう)"]
    },
    {
        kanji: "縦",
        onReading: "ジュウ",
        kunReading: "たて",
        strokes: 16,
        grade: 6,
        session: 2,
        examples: ["縦横 (じゅうおう)", "縦 (たて)"]
    },
    {
        kanji: "縮",
        onReading: "シュク",
        kunReading: "ちぢ-む、ちぢ-まる",
        strokes: 17,
        grade: 6,
        session: 2,
        examples: ["縮小 (しゅくしょう)", "縮む (ちぢむ)"]
    },
    {
        kanji: "熟",
        onReading: "ジュク",
        kunReading: "う-れる",
        strokes: 15,
        grade: 6,
        session: 2,
        examples: ["熟語 (じゅくご)", "成熟 (せいじゅく)"]
    },
    {
        kanji: "純",
        onReading: "ジュン",
        kunReading: "",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["純粋 (じゅんすい)", "純金 (じゅんきん)"]
    },
    {
        kanji: "処",
        onReading: "ショ",
        kunReading: "",
        strokes: 5,
        grade: 6,
        session: 2,
        examples: ["処理 (しょり)", "処分 (しょぶん)"]
    },
    {
        kanji: "署",
        onReading: "ショ",
        kunReading: "",
        strokes: 13,
        grade: 6,
        session: 2,
        examples: ["署名 (しょめい)", "警察署 (けいさつしょ)"]
    },
    {
        kanji: "諸",
        onReading: "ショ",
        kunReading: "もろ",
        strokes: 15,
        grade: 6,
        session: 2,
        examples: ["諸国 (しょこく)", "諸君 (しょくん)"]
    },
    {
        kanji: "除",
        onReading: "ジョ、ジ",
        kunReading: "のぞ-く",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["除外 (じょがい)", "除く (のぞく)"]
    },
    {
        kanji: "将",
        onReading: "ショウ",
        kunReading: "",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["将来 (しょうらい)", "大将 (たいしょう)"]
    },
    {
        kanji: "傷",
        onReading: "ショウ",
        kunReading: "きず、いた-む",
        strokes: 13,
        grade: 6,
        session: 2,
        examples: ["傷害 (しょうがい)", "負傷 (ふしょう)"]
    },
    {
        kanji: "障",
        onReading: "ショウ",
        kunReading: "さわ-る",
        strokes: 14,
        grade: 6,
        session: 2,
        examples: ["障害 (しょうがい)", "支障 (ししょう)"]
    },
    {
        kanji: "城",
        onReading: "ジョウ",
        kunReading: "しろ",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["城下町 (じょうかまち)", "城 (しろ)"]
    },
    {
        kanji: "蒸",
        onReading: "ジョウ",
        kunReading: "む-す、む-れる",
        strokes: 13,
        grade: 6,
        session: 2,
        examples: ["蒸気 (じょうき)", "蒸す (むす)"]
    },
    {
        kanji: "針",
        onReading: "シン",
        kunReading: "はり",
        strokes: 10,
        grade: 6,
        session: 2,
        examples: ["針金 (はりがね)", "方針 (ほうしん)"]
    },
    {
        kanji: "仁",
        onReading: "ジン、ニ",
        kunReading: "",
        strokes: 4,
        grade: 6,
        session: 2,
        examples: ["仁義 (じんぎ)", "仁愛 (じんあい)"]
    },
    {
        kanji: "垂",
        onReading: "スイ",
        kunReading: "た-れる、た-らす",
        strokes: 8,
        grade: 6,
        session: 2,
        examples: ["垂直 (すいちょく)", "垂れる (たれる)"]
    },
    {
        kanji: "推",
        onReading: "スイ",
        kunReading: "お-す",
        strokes: 11,
        grade: 6,
        session: 2,
        examples: ["推進 (すいしん)", "推測 (すいそく)"]
    },
    {
        kanji: "寸",
        onReading: "スン",
        kunReading: "",
        strokes: 3,
        grade: 6,
        session: 2,
        examples: ["寸法 (すんぽう)", "寸前 (すんぜん)"]
    },
    {
        kanji: "盛",
        onReading: "セイ、ジョウ",
        kunReading: "も-る、さか-る",
        strokes: 11,
        grade: 6,
        session: 2,
        examples: ["盛大 (せいだい)", "盛り上がる (もりあがる)"]
    },
    {
        kanji: "聖",
        onReading: "セイ",
        kunReading: "",
        strokes: 13,
        grade: 6,
        session: 2,
        examples: ["聖人 (せいじん)", "聖書 (せいしょ)"]
    },
    {
        kanji: "誠",
        onReading: "セイ",
        kunReading: "まこと",
        strokes: 13,
        grade: 6,
        session: 2,
        examples: ["誠意 (せいい)", "誠実 (せいじつ)"]
    },
    {
        kanji: "宣",
        onReading: "セン",
        kunReading: "",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["宣言 (せんげん)", "宣伝 (せんでん)"]
    },
    {
        kanji: "専",
        onReading: "セン",
        kunReading: "もっぱ-ら",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["専門 (せんもん)", "専用 (せんよう)"]
    },
    {
        kanji: "泉",
        onReading: "セン",
        kunReading: "いずみ",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["温泉 (おんせん)", "泉 (いずみ)"]
    },
    {
        kanji: "洗",
        onReading: "セン",
        kunReading: "あら-う",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["洗濯 (せんたく)", "洗う (あらう)"]
    },
    {
        kanji: "染",
        onReading: "セン",
        kunReading: "そ-める、そ-まる",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["染料 (せんりょう)", "染める (そめる)"]
    },
    {
        kanji: "善",
        onReading: "ゼン",
        kunReading: "よ-い",
        strokes: 12,
        grade: 6,
        session: 2,
        examples: ["善意 (ぜんい)", "改善 (かいぜん)"]
    },
    {
        kanji: "奏",
        onReading: "ソウ",
        kunReading: "かな-でる",
        strokes: 9,
        grade: 6,
        session: 2,
        examples: ["演奏 (えんそう)", "奏でる (かなでる)"]
    },
    {
        kanji: "窓",
        onReading: "ソウ",
        kunReading: "まど",
        strokes: 11,
        grade: 6,
        session: 2,
        examples: ["窓口 (まどぐち)", "窓 (まど)"]
    },
    {
        kanji: "創",
        onReading: "ソウ",
        kunReading: "つく-る",
        strokes: 12,
        grade: 6,
        session: 3,
        examples: ["創造 (そうぞう)", "創立 (そうりつ)"]
    },
    {
        kanji: "装",
        onReading: "ソウ、ショウ",
        kunReading: "よそお-う",
        strokes: 12,
        grade: 6,
        session: 3,
        examples: ["装置 (そうち)", "服装 (ふくそう)"]
    },
    {
        kanji: "層",
        onReading: "ソウ",
        kunReading: "",
        strokes: 14,
        grade: 6,
        session: 3,
        examples: ["階層 (かいそう)", "地層 (ちそう)"]
    },
    {
        kanji: "操",
        onReading: "ソウ",
        kunReading: "みさお、あやつ-る",
        strokes: 16,
        grade: 6,
        session: 3,
        examples: ["操作 (そうさ)", "体操 (たいそう)"]
    },
    {
        kanji: "蔵",
        onReading: "ゾウ",
        kunReading: "くら",
        strokes: 15,
        grade: 6,
        session: 3,
        examples: ["倉庫 (そうこ)", "蔵書 (ぞうしょ)"]
    },
    {
        kanji: "臓",
        onReading: "ゾウ",
        kunReading: "",
        strokes: 19,
        grade: 6,
        session: 3,
        examples: ["内臓 (ないぞう)", "心臓 (しんぞう)"]
    },
    {
        kanji: "存",
        onReading: "ソン",
        kunReading: "ぞん-じる",
        strokes: 6,
        grade: 6,
        session: 3,
        examples: ["存在 (そんざい)", "保存 (ほぞん)"]
    },
    {
        kanji: "尊",
        onReading: "ソン",
        kunReading: "たっと-い、とうと-い",
        strokes: 12,
        grade: 6,
        session: 3,
        examples: ["尊敬 (そんけい)", "尊重 (そんちょう)"]
    },
    {
        kanji: "宅",
        onReading: "タク",
        kunReading: "",
        strokes: 6,
        grade: 6,
        session: 3,
        examples: ["自宅 (じたく)", "住宅 (じゅうたく)"]
    },
    {
        kanji: "担",
        onReading: "タン",
        kunReading: "かつ-ぐ、にな-う",
        strokes: 8,
        grade: 6,
        session: 3,
        examples: ["担当 (たんとう)", "負担 (ふたん)"]
    },
    {
        kanji: "探",
        onReading: "タン",
        kunReading: "さぐ-る、さが-す",
        strokes: 11,
        grade: 6,
        session: 3,
        examples: ["探検 (たんけん)", "探す (さがす)"]
    },
    {
        kanji: "誕",
        onReading: "タン",
        kunReading: "",
        strokes: 15,
        grade: 6,
        session: 3,
        examples: ["誕生 (たんじょう)", "生誕 (せいたん)"]
    },
    {
        kanji: "段",
        onReading: "ダン",
        kunReading: "",
        strokes: 9,
        grade: 6,
        session: 3,
        examples: ["段階 (だんかい)", "階段 (かいだん)"]
    },
    {
        kanji: "暖",
        onReading: "ダン",
        kunReading: "あたた-か、あたた-かい",
        strokes: 13,
        grade: 6,
        session: 3,
        examples: ["暖房 (だんぼう)", "暖かい (あたたかい)"]
    },
    {
        kanji: "値",
        onReading: "チ",
        kunReading: "ね、あたい",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["価値 (かち)", "数値 (すうち)"]
    },
    {
        kanji: "宙",
        onReading: "チュウ",
        kunReading: "",
        strokes: 8,
        grade: 6,
        session: 3,
        examples: ["宇宙 (うちゅう)", "空中 (くうちゅう)"]
    },
    {
        kanji: "忠",
        onReading: "チュウ",
        kunReading: "",
        strokes: 8,
        grade: 6,
        session: 3,
        examples: ["忠実 (ちゅうじつ)", "忠告 (ちゅうこく)"]
    },
    {
        kanji: "著",
        onReading: "チョ",
        kunReading: "あらわ-す",
        strokes: 11,
        grade: 6,
        session: 3,
        examples: ["著者 (ちょしゃ)", "著名 (ちょめい)"]
    },
    {
        kanji: "庁",
        onReading: "チョウ",
        kunReading: "",
        strokes: 5,
        grade: 6,
        session: 3,
        examples: ["庁舎 (ちょうしゃ)", "官庁 (かんちょう)"]
    },
    {
        kanji: "頂",
        onReading: "チョウ",
        kunReading: "いただ-く、いただき",
        strokes: 11,
        grade: 6,
        session: 3,
        examples: ["頂上 (ちょうじょう)", "頂く (いただく)"]
    },
    {
        kanji: "潮",
        onReading: "チョウ",
        kunReading: "しお",
        strokes: 15,
        grade: 6,
        session: 3,
        examples: ["潮流 (ちょうりゅう)", "干潮 (かんちょう)"]
    },
    {
        kanji: "賃",
        onReading: "チン",
        kunReading: "",
        strokes: 13,
        grade: 6,
        session: 3,
        examples: ["賃金 (ちんぎん)", "家賃 (やちん)"]
    },
    {
        kanji: "痛",
        onReading: "ツウ",
        kunReading: "いた-い、いた-む",
        strokes: 12,
        grade: 6,
        session: 3,
        examples: ["痛み (いたみ)", "痛感 (つうかん)"]
    },
    {
        kanji: "展",
        onReading: "テン",
        kunReading: "",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["展開 (てんかい)", "発展 (はってん)"]
    },
    {
        kanji: "討",
        onReading: "トウ",
        kunReading: "う-つ",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["討論 (とうろん)", "検討 (けんとう)"]
    },
    {
        kanji: "党",
        onReading: "トウ",
        kunReading: "",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["政党 (せいとう)", "党員 (とういん)"]
    },
    {
        kanji: "糖",
        onReading: "トウ",
        kunReading: "",
        strokes: 16,
        grade: 6,
        session: 3,
        examples: ["砂糖 (さとう)", "糖分 (とうぶん)"]
    },
    {
        kanji: "届",
        onReading: "カイ",
        kunReading: "とど-ける、とど-く",
        strokes: 8,
        grade: 6,
        session: 3,
        examples: ["届出 (とどけで)", "届ける (とどける)"]
    },
    {
        kanji: "難",
        onReading: "ナン",
        kunReading: "むずか-しい",
        strokes: 18,
        grade: 6,
        session: 3,
        examples: ["困難 (こんなん)", "難しい (むずかしい)"]
    },
    {
        kanji: "乳",
        onReading: "ニュウ",
        kunReading: "ちち",
        strokes: 8,
        grade: 6,
        session: 3,
        examples: ["牛乳 (ぎゅうにゅう)", "乳製品 (にゅうせいひん)"]
    },
    {
        kanji: "認",
        onReading: "ニン",
        kunReading: "みと-める",
        strokes: 14,
        grade: 6,
        session: 3,
        examples: ["認める (みとめる)", "承認 (しょうにん)"]
    },
    {
        kanji: "納",
        onReading: "ノウ、ナッ、ナ、ナン",
        kunReading: "おさ-める、おさ-まる",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["納入 (のうにゅう)", "納得 (なっとく)"]
    },
    {
        kanji: "脳",
        onReading: "ノウ",
        kunReading: "",
        strokes: 11,
        grade: 6,
        session: 3,
        examples: ["脳細胞 (のうさいぼう)", "頭脳 (ずのう)"]
    },
    {
        kanji: "派",
        onReading: "ハ",
        kunReading: "",
        strokes: 9,
        grade: 6,
        session: 3,
        examples: ["派遣 (はけん)", "政派 (せいは)"]
    },
    {
        kanji: "拝",
        onReading: "ハイ",
        kunReading: "おが-む",
        strokes: 8,
        grade: 6,
        session: 3,
        examples: ["拝見 (はいけん)", "参拝 (さんぱい)"]
    },
    {
        kanji: "背",
        onReading: "ハイ",
        kunReading: "せ、そむ-く",
        strokes: 9,
        grade: 6,
        session: 3,
        examples: ["背景 (はいけい)", "背中 (せなか)"]
    },
    {
        kanji: "肺",
        onReading: "ハイ",
        kunReading: "",
        strokes: 9,
        grade: 6,
        session: 3,
        examples: ["肺臓 (はいぞう)", "肺炎 (はいえん)"]
    },
    {
        kanji: "俳",
        onReading: "ハイ",
        kunReading: "",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["俳句 (はいく)", "俳優 (はいゆう)"]
    },
    {
        kanji: "班",
        onReading: "ハン",
        kunReading: "",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["班長 (はんちょう)", "一班 (いちはん)"]
    },
    {
        kanji: "晩",
        onReading: "バン",
        kunReading: "",
        strokes: 12,
        grade: 6,
        session: 3,
        examples: ["晩年 (ばんねん)", "今晩 (こんばん)"]
    },
    {
        kanji: "否",
        onReading: "ヒ",
        kunReading: "いな",
        strokes: 7,
        grade: 6,
        session: 3,
        examples: ["否定 (ひてい)", "可否 (かひ)"]
    },
    {
        kanji: "批",
        onReading: "ヒ",
        kunReading: "",
        strokes: 7,
        grade: 6,
        session: 3,
        examples: ["批判 (ひはん)", "批評 (ひひょう)"]
    },
    {
        kanji: "秘",
        onReading: "ヒ",
        kunReading: "ひ-める",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["秘密 (ひみつ)", "秘書 (ひしょ)"]
    },
    {
        kanji: "腹",
        onReading: "フク",
        kunReading: "はら",
        strokes: 13,
        grade: 6,
        session: 3,
        examples: ["腹痛 (ふくつう)", "本腹 (ほんばら)"]
    },
    {
        kanji: "奮",
        onReading: "フン",
        kunReading: "ふる-う",
        strokes: 16,
        grade: 6,
        session: 3,
        examples: ["奮闘 (ふんとう)", "興奮 (こうふん)"]
    },
    {
        kanji: "並",
        onReading: "ヘイ",
        kunReading: "なみ、なら-べる",
        strokes: 8,
        grade: 6,
        session: 3,
        examples: ["並行 (へいこう)", "並ぶ (ならぶ)"]
    },
    {
        kanji: "陛",
        onReading: "ヘイ",
        kunReading: "",
        strokes: 10,
        grade: 6,
        session: 3,
        examples: ["陛下 (へいか)", "天陛 (てんぺい)"]
    },
    {
        kanji: "閉",
        onReading: "ヘイ",
        kunReading: "と-じる、と-ざす",
        strokes: 11,
        grade: 6,
        session: 3,
        examples: ["閉会 (へいかい)", "開閉 (かいへい)"]
    },
    {
        kanji: "片",
        onReading: "ヘン",
        kunReading: "かた",
        strokes: 4,
        grade: 6,
        session: 3,
        examples: ["片方 (かたほう)", "断片 (だんぺん)"]
    },
    {
        kanji: "補",
        onReading: "ホ",
        kunReading: "おぎな-う",
        strokes: 12,
        grade: 6,
        session: 3,
        examples: ["補助 (ほじょ)", "補う (おぎなう)"]
    },
    {
        kanji: "暮",
        onReading: "ボ",
        kunReading: "く-れる",
        strokes: 14,
        grade: 6,
        session: 4,
        examples: ["暮らし (くらし)", "日暮れ (ひぐれ)"]
    },
    {
        kanji: "宝",
        onReading: "ホウ",
        kunReading: "たから",
        strokes: 8,
        grade: 6,
        session: 4,
        examples: ["宝物 (たからもの)", "財宝 (ざいほう)"]
    },
    {
        kanji: "訪",
        onReading: "ホウ",
        kunReading: "おとず-れる、たず-ねる",
        strokes: 11,
        grade: 6,
        session: 4,
        examples: ["訪問 (ほうもん)", "来訪 (らいほう)"]
    },
    {
        kanji: "亡",
        onReading: "ボウ、モウ",
        kunReading: "な-い",
        strokes: 3,
        grade: 6,
        session: 4,
        examples: ["死亡 (しぼう)", "亡くなる (なくなる)"]
    },
    {
        kanji: "忘",
        onReading: "ボウ",
        kunReading: "わす-れる",
        strokes: 7,
        grade: 6,
        session: 4,
        examples: ["忘れる (わすれる)", "忘年会 (ぼうねんかい)"]
    },
    {
        kanji: "棒",
        onReading: "ボウ",
        kunReading: "",
        strokes: 12,
        grade: 6,
        session: 4,
        examples: ["棒引き (ぼうびき)", "鉄棒 (てつぼう)"]
    },
    {
        kanji: "枚",
        onReading: "マイ",
        kunReading: "",
        strokes: 8,
        grade: 6,
        session: 4,
        examples: ["一枚 (いちまい)", "何枚 (なんまい)"]
    },
    {
        kanji: "幕",
        onReading: "マク、バク",
        kunReading: "",
        strokes: 13,
        grade: 6,
        session: 4,
        examples: ["幕府 (ばくふ)", "開幕 (かいまく)"]
    },
    {
        kanji: "密",
        onReading: "ミツ",
        kunReading: "ひそ-か",
        strokes: 11,
        grade: 6,
        session: 4,
        examples: ["密度 (みつど)", "秘密 (ひみつ)"]
    },
    {
        kanji: "盟",
        onReading: "メイ",
        kunReading: "",
        strokes: 13,
        grade: 6,
        session: 4,
        examples: ["同盟 (どうめい)", "連盟 (れんめい)"]
    },
    {
        kanji: "模",
        onReading: "モ、ボ",
        kunReading: "",
        strokes: 14,
        grade: 6,
        session: 4,
        examples: ["模様 (もよう)", "模範 (もはん)"]
    },
    {
        kanji: "訳",
        onReading: "ヤク",
        kunReading: "わけ",
        strokes: 11,
        grade: 6,
        session: 4,
        examples: ["翻訳 (ほんやく)", "訳す (やくす)"]
    },
    {
        kanji: "郵",
        onReading: "ユウ",
        kunReading: "",
        strokes: 11,
        grade: 6,
        session: 4,
        examples: ["郵便 (ゆうびん)", "郵送 (ゆうそう)"]
    },
    {
        kanji: "優",
        onReading: "ユウ",
        kunReading: "やさ-しい、すぐ-れる",
        strokes: 17,
        grade: 6,
        session: 4,
        examples: ["優勝 (ゆうしょう)", "優しい (やさしい)"]
    },
    {
        kanji: "幼",
        onReading: "ヨウ",
        kunReading: "おさな-い",
        strokes: 5,
        grade: 6,
        session: 4,
        examples: ["幼児 (ようじ)", "幼い (おさない)"]
    },
    {
        kanji: "欲",
        onReading: "ヨク",
        kunReading: "ほ-しい",
        strokes: 11,
        grade: 6,
        session: 4,
        examples: ["欲望 (よくぼう)", "欲しい (ほしい)"]
    },
    {
        kanji: "翌",
        onReading: "ヨク",
        kunReading: "",
        strokes: 11,
        grade: 6,
        session: 4,
        examples: ["翌日 (よくじつ)", "翌年 (よくねん)"]
    },
    {
        kanji: "乱",
        onReading: "ラン",
        kunReading: "みだ-れる、みだ-す",
        strokes: 7,
        grade: 6,
        session: 4,
        examples: ["混乱 (こんらん)", "乱れる (みだれる)"]
    },
    {
        kanji: "卵",
        onReading: "ラン",
        kunReading: "たまご",
        strokes: 7,
        grade: 6,
        session: 4,
        examples: ["卵白 (らんぱく)", "産卵 (さんらん)"]
    },
    {
        kanji: "覧",
        onReading: "ラン",
        kunReading: "",
        strokes: 17,
        grade: 6,
        session: 4,
        examples: ["一覧 (いちらん)", "観覧 (かんらん)"]
    },
    {
        kanji: "裏",
        onReading: "リ",
        kunReading: "うら",
        strokes: 13,
        grade: 6,
        session: 4,
        examples: ["裏側 (うらがわ)", "表裏 (ひょうり)"]
    },
    {
        kanji: "律",
        onReading: "リツ、リチ",
        kunReading: "",
        strokes: 9,
        grade: 6,
        session: 4,
        examples: ["法律 (ほうりつ)", "規律 (きりつ)"]
    },
    {
        kanji: "臨",
        onReading: "リン",
        kunReading: "のぞ-む",
        strokes: 18,
        grade: 6,
        session: 4,
        examples: ["臨時 (りんじ)", "臨む (のぞむ)"]
    },
    {
        kanji: "朗",
        onReading: "ロウ",
        kunReading: "ほが-らか",
        strokes: 10,
        grade: 6,
        session: 4,
        examples: ["朗読 (ろうどく)", "明朗 (めいろう)"]
    },
    {
        kanji: "論",
        onReading: "ロン",
        kunReading: "",
        strokes: 15,
        grade: 6,
        session: 4,
        examples: ["論文 (ろんぶん)", "議論 (ぎろん)"]
    },
]
