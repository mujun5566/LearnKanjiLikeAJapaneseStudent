
     // Basic kanji data
        // Just the kanjiData array part
        const kanjiData = [
            // 一年级汉字 (80字)
            {
                kanji: "一",
                onReading: "イチ",
                kunReading: "ひと-つ",
                strokes: 1,
                grade: 1,
                session: 1,
                examples: ["一つ (ひとつ)", "一年 (いちねん)"]
            },
            {
                kanji: "七",
                onReading: "シチ",
                kunReading: "なな、なな-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["七つ (ななつ)", "七月 (しちがつ)"]
            },
            {
                kanji: "三",
                onReading: "サン",
                kunReading: "み、み-つ",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["三つ (みつ)", "三月 (さんがつ)"]
            },
            {
                kanji: "上",
                onReading: "ジョウ",
                kunReading: "うえ、うわ、かみ、あ-げる、あ-がる、のぼ-る",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["上手 (じょうず)", "上がる (あがる)"]
            },
            {
                kanji: "下",
                onReading: "カ、ゲ",
                kunReading: "した、しも、さ-げる、くだ-る、お-ろす",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["下手 (へた)", "下がる (さがる)"]
            },
            {
                kanji: "二",
                onReading: "ニ",
                kunReading: "ふた、ふた-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["二つ (ふたつ)", "二月 (にがつ)"]
            },
            {
                kanji: "八",
                onReading: "ハチ",
                kunReading: "や、や-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["八つ (やつ)", "八月 (はちがつ)"]
            },
            {
                kanji: "九",
                onReading: "キュウ、ク",
                kunReading: "ここの、ここの-つ",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["九つ (ここのつ)", "九月 (くがつ)"]
            },
            {
                kanji: "十",
                onReading: "ジュウ",
                kunReading: "とお、���",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["十日 (とおか)", "十月 (じゅうがつ)"]
            },
            {
                kanji: "人",
                onReading: "ジン、ニン",
                kunReading: "ひと",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["人間 (にんげん)", "大人 (おとな)"]
            },
            {
                kanji: "入",
                onReading: "ニュウ",
                kunReading: "い-る、い-れる、はい-る",
                strokes: 2,
                grade: 1,
                session: 1,
                examples: ["入学 (にゅうがく)", "入る (はいる)"]
            },
            {
                kanji: "大",
                onReading: "ダイ、タイ",
                kunReading: "おお、おお-きい",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["大きい (おおきい)", "大学 (だいがく)"]
            },
            {
                kanji: "女",
                onReading: "ジョ、ニョ",
                kunReading: "おんな、め",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["女の子 (おんなのこ)", "女性 (じょせい)"]
            },
            {
                kanji: "子",
                onReading: "シ、ス",
                kunReading: "こ",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["子供 (こども)", "女子 (じょし)"]
            },
            {
                kanji: "小",
                onReading: "ショウ",
                kunReading: "ちい-さい、こ、お",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["小さい (ちいさい)", "小学校 (しょうがっこう)"]
            },
            {
                kanji: "山",
                onReading: "サン",
                kunReading: "やま",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["山道 (やまみち)", "火山 (かざん)"]
            },
            {
                kanji: "川",
                onReading: "セン",
                kunReading: "かわ",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["川岸 (かわぎし)", "河川 (かせん)"]
            },
            {
                kanji: "月",
                onReading: "ゲツ、ガツ",
                kunReading: "つき",
                strokes: 4,
                grade: 1,
                session: 2,
                examples: ["月曜日 (げつようび)", "一月 (いちがつ)"]
            },
            {
                kanji: "日",
                onReading: "ニチ、ジツ",
                kunReading: "ひ、-び、-か",
                strokes: 4,
                grade: 1,
                session: 2,
                examples: ["日曜日 (にちようび)", "今日 (きょう)"]
            },
            {
                kanji: "木",
                onReading: "モク、ボク",
                kunReading: "き",
                strokes: 4,
                grade: 1,
                session: 2,
                examples: ["木曜日 (もくようび)", "木材 (も��ざい)"]
            },
            {
                kanji: "水",
                onReading: "スイ",
                kunReading: "みず",
                strokes: 4,
                grade: 1,
                session: 2,
                examples: ["水曜日 (すいようび)", "水泳 (すいえい)"]
            },
            {
                kanji: "火",
                onReading: "カ",
                kunReading: "ひ",
                strokes: 4,
                grade: 1,
                session: 2,
                examples: ["火曜日 (かようび)", "火事 (かじ)"]
            },
            {
                kanji: "金",
                onReading: "キン、コン",
                kunReading: "かね、かな-",
                strokes: 8,
                grade: 1,
                session: 3,
                examples: ["金曜日 (きんようび)", "お金 (おかね)"]
            },
            {
                kanji: "土",
                onReading: "ド、ト",
                kunReading: "つち",
                strokes: 3,
                grade: 1,
                session: 1,
                examples: ["土曜日 (どようび)", "土地 (とち)"]
            },
            {
                kanji: "本",
                onReading: "ホ��",
                kunReading: "もと",
                strokes: 5,
                grade: 1,
                session: 2,
                examples: ["日本 (にほん)", "本屋 (ほんや)"]
            },
            {
                kanji: "文",
                onReading: "ブン、モン",
                kunReading: "ふみ",
                strokes: 4,
                grade: 1,
                session: 2,
                examples: ["文字 (もじ)", "作文 (さくぶん)"]
            },
            {
                kanji: "字",
                onReading: "ジ",
                kunReading: "あざ",
                strokes: 6,
                grade: 1,
                session: 2,
                examples: ["字を書く (じをかく)", "漢字 (かんじ)"]
            },
            {
                kanji: "学",
                onReading: "ガク",
                kunReading: "まな-ぶ",
                strokes: 8,
                grade: 1,
                session: 3,
                examples: ["学校 (がっこう)", "学ぶ (まなぶ)"]
            },
            {
                kanji: "校",
                onReading: "コウ",
                kunReading: "",
                strokes: 10,
                grade: 1,
                session: 3,
                examples: ["学校 (がっこう)", "校長 (こうちょう)"]
            },
            {
                kanji: "村",
                onReading: "ソン",
                kunReading: "むら",
                strokes: 7,
                grade: 1,
                session: 3,
                examples: ["村人 (むらびと)", "山村 (さ���そん)"]
            },
            {
                kanji: "町",
                onReading: "チョウ",
                kunReading: "まち",
                strokes: 7,
                grade: 1,
                session: 3,
                examples: ["町内 (ちょうない)", "下町 (したまち)"]
            },
            {
                kanji: "年",
                onReading: "ネン",
                kunReading: "とし",
                strokes: 6,
                grade: 1,
                session: 2,
                examples: ["今年 (ことし)", "年齢 (ねんれい)"]
            },
            {
                kanji: "早",
                onReading: "ソウ、サッ",
                kunReading: "はや-い、はや-める、はや-まる",
                strokes: 6,
                grade: 1,
                session: 2,
                examples: ["早起き (はやおき)", "早い (はやい)"]
            },
            {
                kanji: "気",
                onReading: "キ、ケ",
                kunReading: "",
                strokes: 6,
                grade: 1,
                session: 2,
                examples: ["天気 (てんき)", "気持ち (きもち)"]
            },
            {
                kanji: "百",
                onReading: "ヒャク",
                kunReading: "もも",
                strokes: 6,
                grade: 1,
                session: 2,
                examples: ["百円 (ひゃくえん)", "百人 (ひゃくにん)"]
            },
            {
                kanji: "竹",
                onReading: "チク",
                kunReading: "たけ",
                strokes: 6,
                grade: 1,
                session: 2,
                examples: ["竹の子 (たけのこ)", "竹林 (ちくりん)"]
            },
            {
                kanji: "糸",
                onReading: "シ",
                kunReading: "いと",
                strokes: 6,
                grade: 1,
                session: 2,
                examples: ["毛糸 (けいと)", "糸巻き (いとまき)"]
            },
            {
                kanji: "貝",
                onReading: "バイ",
                kunReading: "かい",
                strokes: 7,
                grade: 1,
                session: 3,
                examples: ["貝殻 (かいがら)", "貝類 (かいるい)"]
            },
            {
                kanji: "見",
                onReading: "ケン",
                kunReading: "み-る、み-える、み-せる",
                strokes: 7,
                grade: 1,
                session: 3,
                examples: ["見学 (けんがく)", "見える (みえる)"]
            },
            {
                kanji: "車",
                onReading: "シャ",
                kunReading: "くるま",
                strokes: 7,
                grade: 1,
                session: 3,
                examples: ["自動車 (じどうしゃ)", "電車 (でんしゃ)"]
            },
            {
                kanji: "赤",
                onReading: "セキ、シャク",
                kunReading: "���か、あか-い、あか-らむ",
                strokes: 7,
                grade: 1,
                session: 3,
                examples: ["赤い (あかい)", "赤ちゃん (あかちゃん)"]
            },
            {
                kanji: "足",
                onReading: "ソク",
                kunReading: "あし、た-りる、た-る",
                strokes: 7,
                grade: 1,
                session: 3,
                examples: ["足首 (あしくび)", "足りる (たりる)"]
            },
            {
                kanji: "立",
                onReading: "リツ、リュウ",
                kunReading: "た-つ、た-てる",
                strokes: 5,
                grade: 1,
                session: 2,
                examples: ["立つ (たつ)", "立派 (りっぱ)"]
            },
            {
                kanji: "手",
                onReading: "シュ",
                kunReading: "て、た-",
                strokes: 4,
                grade: 1,
                session: 2,
                examples: ["手紙 (てがみ)", "上手 (じょうず)"]
            },
            {
                kanji: "目",
                onReading: "モク",
                kunReading: "め",
                strokes: 5,
                grade: 1,
                session: 2,
                examples: ["目�� (もくてき)", "目玉 (めだま)"]
            },
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
                kunReading: "は、はね",
                strokes: 6,
                grade: 2,
                session: 1,
                examples: ["羽根 (はね)", "羽織 (はおり)"]
            },
            {
                kanji: "雨",
                onReading: "ウ",
                kunReading: "あめ、あま-",
                strokes: 8,
                grade: 2,
                session: 1,
                examples: ["雨天 (うてん)", "雨降り (あめふり)"]
            },
            {
                kanji: "円",
                onReading: "エン",
                kunReading: "まる-い",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["円形 (えんけい)", "百円 (ひゃくえん)"]
            },
            {
                kanji: "王",
                onReading: "オウ",
                kunReading: "",
                strokes: 4,
                grade: 2,
                session: 1,
                examples: ["王様 (おうさま)", "女王 (じょおう)"]
            },
            {
                kanji: "音",
                onReading: "オン、イン",
                kunReading: "おと、ね",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["音楽 (おんがく)", "物音 (ものおと)"]
            },
            {
                kanji: "夏",
                onReading: "カ、ゲ",
                kunReading: "なつ",
                strokes: 10,
                grade: 2,
                session: 2,
                examples: ["夏休み (なつやすみ)", "夏季 (かき)"]
            },
            {
                kanji: "家",
                onReading: "カ、ケ",
                kunReading: "いえ、や",
                strokes: 10,
                grade: 2,
                session: 2,
                examples: ["家族 (かぞく)", "作家 (さっか)"]
            },
            {
                kanji: "歌",
                onReading: "カ",
                kunReading: "うた、うた-う",
                strokes: 14,
                grade: 2,
                session: 3,
                examples: ["歌手 (かしゅ)", "歌う (うたう)"]
            },
            {
                kanji: "画",
                onReading: "ガ、カク",
                kunReading: "",
                strokes: 8,
                grade: 2,
                session: 2,
                examples: ["映画 (えいが)", "計画 (けいかく)"]
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
                examples: ["会社 (かいしゃ)", "会議 (かいぎ)"]
            },
            {
                kanji: "海",
                onReading: "カイ",
                kunReading: "うみ",
                strokes: 9,
                grade: 2,
                session: 2,
                examples: ["海岸 (かいがん)", "海水浴 (かいすいよく)"]
            },
            {
                kanji: "絵",
                onReading: "カイ、エ",
                kunReading: "",
                strokes: 12,
                grade: 2,
                session: 3,
                examples: ["絵本 (えほん)", "絵画 (かいが)"]
            },
            {
                kanji: "外",
                onReading: "ガイ、ゲ",
                kunReading: "そと、ほか、はず-す、はず-れる",
                strokes: 5,
                grade: 2,
                session: 1,
                examples: ["外国 (がいこく)", "外出 (がいしゅつ)"]
            },
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
                kunReading: "",
                strokes: 8,
                grade: 3,
                session: 2,
                examples: ["委員 (いい��)", "委託 (いたく)"]
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
                examples: ["横断 (おうだん)", "横書き (よ��がき)"]
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
                examples: ["世界 (せい)", "境界 (きょうかい)"]
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
                kanji: "具",
                onReading: "グ",
                kunReading: "",
                strokes: 8,
                grade: 3,
                session: 2,
                examples: ["道具 (どうぐ)", "用具 (ようぐ)"]
            },
            {
                kanji: "君",
                onReading: "���ン",
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
            }
        ];
