/*
  問題データ ― 問題を増やすときは、このファイルだけを編集します。

  【追加のしかた】
  1. 下のほうにある「▲ ここより上に追加」の行の、すぐ上に新しい問題セットを貼り付ける。
  2. Claude が出した JSON が [ ] で囲まれている場合は、いちばん外側の [ と ] は取り、
     { から } までのセットだけを貼り付ける。
  3. 各セットの最後の } のあとには、カンマ「,」をつける（最後のセットにも付けて大丈夫です）。
  4. GitHub にコミットして保存する。数分後、公開ページに反映されます。

  ・"full": true は「全文」の問題につけます。
  ・セットの並び順が、「すべて」で練習するときの出題順になります。
  ・貼り付けのミス（カンマ・引用符の抜け）があると、アプリに
    「problems.js を読み込めませんでした」と表示されます。
*/
window.PROBLEM_SETS = [
  {
    "id": "sample-1",
    "title": "サンプル：父は一生懸命働いた",
    "items": [
      {"q": "父は一生懸命働いた", "a": "My father worked hard"},
      {"q": "私が大学で勉強できるように", "a": "so that I could study at college"},
      {"q": "父は、私が大学で勉強できるよう一生懸命働いた", "a": "My father worked hard so that I could study at college"},
      {"q": "若いときにもっと教育を受けていれば", "a": "with more education in his youth"},
      {"q": "(父は)そんなに苦労することはないのに", "a": "he wouldn't have such troubles then"},
      {"q": "若いときにもっと教育を受けていれば、こんなに苦労することはないのにと言って", "a": "saying that with more education in his youth, he wouldn't have such troubles then"},
      {"q": "おまえには私と同じ人生を歩ませたくない", "a": "he didn't want me to live the same life as he did"},
      {"q": "若いときにもっと教育を受けていれば苦労しないのにと言い、また、おまえには私と同じ人生を歩ませたくないと言って", "a": "saying that with more education in his youth, he wouldn't have such troubles then and that he didn't want me to live the same life as he did"},
      {"q": "若いときにもっと教育を受けていれば、今こんなに苦労をすることはないのに。おまえには私と同じ人生を歩ませたくないと言って、父は私が大学で勉強できるよう一生懸命働いた。", "a": "My father worked hard so that I could study at college, saying that with more education in his youth, he wouldn't have such troubles then and that he didn't want me to live the same life as he did.", "full": true}
    ]
  },
  {
    "title": "母に孝行するつもりだった",
    "items": [
      {"q": "母に孝行するつもりだった", "a": "I intended to have become more dutiful to my mother"},
      {"q": "毎月もう少しお金を送り", "a": "sending some more money every month"},
      {"q": "毎月もう少しお金を送り、母に孝行するつもりだった", "a": "I intended to have become more dutiful to my mother, sending some more money every month"},
      {"q": "私の仕事がうまく行く", "a": "I became successful in my business"},
      {"q": "そうする余裕ができる", "a": "I could afford to do so"},
      {"q": "私の仕事がうまく行き、そうする余裕ができる前に", "a": "before I became successful in my business and I could afford to do so"},
      {"q": "母が亡くなったのは、とても嘆かわしい", "a": "it's a pity that she should have passed away"},
      {"q": "私の仕事がうまく行き、そうする余裕ができる前に母が亡くなったのは、とても嘆かわしい", "a": "it's a pity that she should have passed away before I became successful in my business and I could afford to do so"},
      {"q": "毎月もう少しお金を送り、母に孝行するつもりだったのだが、私の仕事がうまく行き、そうする余裕ができる前に母が亡くなったのは、とても嘆かわしい。", "a": "I intended to have become more dutiful to my mother, sending some more money every month, but it's a pity that she should have passed away before I became successful in my business and I could afford to do so.", "full": true}
    ]
  },
  {
    "title": "君は確かにうまく行っているが（貯金と計画）",
    "items": [
      {"q": "君は確かにうまく行っている", "a": "You're doing well, to be sure"},
      {"q": "それだけに頼るのは良くない", "a": "it's not a good idea to rely completely on it"},
      {"q": "君は確かにうまく行っているが、それだけに頼るのは良くない", "a": "You're doing well, to be sure, but it's not a good idea to rely completely on it"},
      {"q": "いつもそんな大儲けができる訳ではない", "a": "it isn't always the case that you can make such a big profit"},
      {"q": "いつもそんな大儲けができる訳ではないから", "a": "as it isn't always the case that you can make such a big profit"},
      {"q": "君は確かにうまく行っているが、いつもそんな大儲けができる訳ではないから、それだけに頼るのは良くない。", "a": "You're doing well, to be sure, but it's not a good idea to rely completely on it, as it isn't always the case that you can make such a big profit."},
      {"q": "手遅れになる前に", "a": "before it is too late"},
      {"q": "貯金をして、次の計画を立てておく", "a": "save and make your next plan"},
      {"q": "貯金をして、次の計画を立てておくのが望ましい", "a": "It's advisable that you should save and make your next plan"},
      {"q": "手遅れになる前に貯金をして、次の計画を立てておくのが望ましい。", "a": "It's advisable that you should save and make your next plan before it is too late."},
      {"q": "君は確かにうまく行っているが、いつもそんな大儲けができる訳ではないから、それだけに頼るのは良くない。手遅れになる前に貯金をして、次の計画を立てておくのが望ましい。", "a": "You're doing well, to be sure, but it's not a good idea to rely completely on it, as it isn't always the case that you can make such a big profit. It's advisable that you should save and make your next plan before it is too late.", "full": true}
    ]
  },
  {
    "title": "十分にお金を持っていれば（仮定法過去）",
    "items": [
      {"q": "十分にお金を持っていれば", "a": "If I had enough money"},
      {"q": "そのお土産を買うことが出来る", "a": "I could buy that souvenir"},
      {"q": "十分にお金を持っていればそのお土産を買うことが出来るのだが", "a": "If I had enough money, I could buy that souvenir"},
      {"q": "そうではないので", "a": "As it is"},
      {"q": "何も買えない", "a": "I can buy nothing"},
      {"q": "そうではないので、何も買えない", "a": "As it is, I can buy nothing"},
      {"q": "十分にお金を持っていればそのお土産を買うことが出来るのだが。そうではないので、何も買えない。", "a": "If I had enough money, I could buy that souvenir. As it is, I can buy nothing.", "full": true}
    ]
  },
  {
    "title": "十分にお金を持っていたならば（仮定法過去完了）",
    "items": [
      {"q": "十分にお金を持っていたならば", "a": "If I had had enough money"},
      {"q": "そのお土産を買うことが出来た", "a": "I could have bought that souvenir"},
      {"q": "十分にお金を持っていたならばそのお土産を買うことが出来たのだが", "a": "If I had had enough money, I could have bought that souvenir"},
      {"q": "そうではなかったので", "a": "As it was"},
      {"q": "何も買えなかった", "a": "I could buy nothing"},
      {"q": "そうではなかったので、何も買えなかった", "a": "As it was, I could buy nothing"},
      {"q": "十分にお金を持っていたならばそのお土産を買うことが出来たのだが。そうではなかったので、何も買えなかった。", "a": "If I had had enough money, I could have bought that souvenir. As it was, I could buy nothing.", "full": true}
    ]
  },
  {
    "title": "孤児の親切な誘い",
    "items": [
      {"q": "その孤児が受け入れるのを妨げているものを考えてみれば", "a": "Considering what is preventing the orphan boy from accepting"},
      {"q": "君の家に泊まってもいいという親切な誘い", "a": "your kind offer that he may stay with you"},
      {"q": "君の家に泊まってもいいという親切な誘いを、なぜその孤児が受け入れないのか理由を考えてみれば", "a": "Considering what is preventing the orphan boy from accepting your kind offer that he may stay with you"},
      {"q": "君が努力しなかった", "a": "you hadn't done a lot"},
      {"q": "その子が心を開き、安心する", "a": "opening his mind and freeing him from anxiety"},
      {"q": "その子が心を開き、安心するよう、君が努力しなかった", "a": "you hadn't done a lot in opening his mind and freeing him from anxiety"},
      {"q": "誘いをかける前に", "a": "before you gave him the offer"},
      {"q": "誘いをかける前にその子が心を開き、安心するよう、君が努力しなかった", "a": "you hadn't done a lot in opening his mind and freeing him from anxiety before you gave him the offer"},
      {"q": "誘いをかける前にその子が心を開き、安心するよう、君が努力しなかったことが分かるでしょう", "a": "you'll come to know that you hadn't done a lot in opening his mind and freeing him from anxiety before you gave him the offer"},
      {"q": "君の家に泊まってもいいという親切な誘いを、なぜその孤児が受け入れないのか理由を考えてみれば、誘いをかける前にその子が心を開き、安心するよう、君が努力しなかったことが分かるでしょう。", "a": "Considering what is preventing the orphan boy from accepting your kind offer that he may stay with you, you'll come to know that you hadn't done a lot in opening his mind and freeing him from anxiety before you gave him the offer.", "full": true}
    ]
  },
  {
    "title": "匿名で寄付していたようだ",
    "items": [
      {"q": "稼ぎの殆ど", "a": "most of what he earned"},
      {"q": "社会的弱者", "a": "socially handicapped people"},
      {"q": "その人は寄付していたようだ", "a": "The man seems to have been donating"},
      {"q": "稼ぎの殆どを匿名で寄付していた", "a": "donating most of what he earned anonymously"},
      {"q": "その人は稼ぎの殆どを匿名で寄付していたようだ", "a": "The man seems to have been donating most of what he earned anonymously"},
      {"q": "その人は稼ぎの殆どを匿名で社会的弱者に寄付していたようだ。", "a": "The man seems to have been donating most of what he earned anonymously to socially handicapped people.", "full": true}
    ]
  },
    {
    "title": "彼は頑固だが（一肌脱ぐ）",
    "items": [
      {"q": "彼は頑固だ", "a": "He is stubborn, to be sure"},
      {"q": "我々に借金がある", "a": "he is indebted to us"},
      {"q": "一肌脱がずにはいられない", "a": "he would have no choice but to do us the favor"},
      {"q": "我々に借金があるので一肌脱がずにはいられない", "a": "he is indebted to us so much that he would have no choice but to do us the favor"},
      {"q": "彼は頑固だが、我々に借金があるので一肌脱がずにはいられないだろう", "a": "He is stubborn, to be sure, but he is indebted to us so much that he would have no choice but to do us the favor"},
      {"q": "だから彼にやってもらえばいいのだ", "a": "So, let it be done by him"},
      {"q": "彼は頑固だが、我々に借金があるので一肌脱がずにはいられないだろう。だから彼にやってもらえばいいのだ。", "a": "He is stubborn, to be sure, but he is indebted to us so much that he would have no choice but to do us the favor. So, let it be done by him.", "full": true}
    ]
  },
  {
    "title": "家主さんほど親切な人はいなかった",
    "items": [
      {"q": "私がこの国で出会ったなかで、誰も（いなかった）", "a": "No one I've ever met in this country"},
      {"q": "うちの家主さんほど親切にしてくれた", "a": "was as kind to me as my landlady"},
      {"q": "私がこの国で出会ったなかで、うちの家主さんほど親切にしてくれた人はいなかった", "a": "No one I've ever met in this country was as kind to me as my landlady"},
      {"q": "彼女を見て母を思い出した", "a": "She reminded me of my mother"},
      {"q": "今の彼女と同じくらいの年で亡くなった", "a": "passed away at almost the same age as she is now"},
      {"q": "彼女を見て、今の彼女と同じくらいの年で亡くなった母を思い出した", "a": "She reminded me of my mother, who passed away at almost the same age as she is now"},
      {"q": "私がこの国で出会ったなかで、うちの家主さんほど親切にしてくれた人はいなかった。彼女を見て母を思い出した。母は今の彼女と同じくらいの年で亡くなった。", "a": "No one I've ever met in this country was as kind to me as my landlady. She reminded me of my mother, who passed away at almost the same age as she is now.", "full": true}
    ]
  },
  {
    "title": "息子を叱らない日はない",
    "items": [
      {"q": "息子を叱らない日は一日もない", "a": "Not a day passes but I scold my boy"},
      {"q": "どうやっていたずらを止めさせればいいのかしら", "a": "I wonder how I should make him stop doing mischief"},
      {"q": "両親が私を育てた苦労", "a": "what my parents went through to bring me up"},
      {"q": "今になって両親が私を育てた苦労が分かった", "a": "only now did I realize what my parents went through to bring me up"},
      {"q": "どうやっていたずらを止めさせればいいのかしら。今になって両親が私を育てた苦労が分かったわ", "a": "I wonder how I should make him stop doing mischief and only now did I realize what my parents went through to bring me up"},
      {"q": "息子を叱らない日は一日もない。どうやっていたずらを止めさせればいいのかしら。今になって両親が私を育てた苦労が分かったわ。", "a": "Not a day passes but I scold my boy. I wonder how I should make him stop doing mischief and only now did I realize what my parents went through to bring me up.", "full": true}
    ]
  },
  {
    "title": "陰で何と言っているのか",
    "items": [
      {"q": "彼らが君のことを陰で何と言っているのか", "a": "what they say about you behind your back"},
      {"q": "彼らが君のことを陰で何と言っているのか興味がある", "a": "You're curious about what they say about you behind your back"},
      {"q": "面と向かって良く言っていても", "a": "though they speak well of you in your presence"},
      {"q": "面と向かって良く言っていても、彼らが君のことを陰で何と言っているのか興味がある", "a": "You're curious about what they say about you behind your back, though they speak well of you in your presence"},
      {"q": "そうではないですか（確認）", "a": "Is it right?"},
      {"q": "面と向かって良く言っていても、彼らが君のことを陰で何と言っているのか興味があるんじゃないんですか。", "a": "You're curious about what they say about you behind your back, though they speak well of you in your presence. Is it right?", "full": true}
    ]
  },
  {
    "title": "与党議員の主張（消費税）",
    "items": [
      {"q": "与党の議員が野党に対する質疑応答のなかで主張したところによると", "a": "According to what the member of the ruling party insisted in his answer to the opposition parties"},
      {"q": "急激に人口が増加している高齢者", "a": "the elderly, whose population is dramatically becoming bigger"},
      {"q": "高齢者の生活援助に備えられるように", "a": "so that they can get ready to support the elderly"},
      {"q": "急激に人口が増加している高齢者の生活援助に備えられるように", "a": "so that they can get ready to support the elderly, whose population is dramatically becoming bigger"},
      {"q": "消費税の値上げが必要だ", "a": "it is of necessity to raise the consumption tax"},
      {"q": "高齢者の人口は急激に増加しており、高齢者の生活援助がいつでもできるよう消費税の値上げが必要だ", "a": "it is of necessity to raise the consumption tax so that they can get ready to support the elderly, whose population is dramatically becoming bigger"},
      {"q": "与党の議員は野党に対する質疑応答のなかで、高齢者の人口は急激に増加しており、高齢者の生活援助がいつでもできるよう消費税の値上げが必要だ、と主張した。", "a": "According to what the member of the ruling party insisted in his answer to the opposition parties, it is of necessity to raise the consumption tax so that they can get ready to support the elderly, whose population is dramatically becoming bigger.", "full": true}
    ]
  },
  {
    "title": "やさしい英語で書かれた本",
    "items": [
      {"q": "やさしい英語で書かれているので", "a": "Written in simple English"},
      {"q": "この本は初心者でも読むことができる", "a": "this book can be read by basic students"},
      {"q": "やさしい英語で書かれているので、この本は初心者でも読むことができる。", "a": "Written in simple English, this book can be read by basic students.", "full": true}
    ]
  },
  {
    "title": "変な男だったので（分詞構文）",
    "items": [
      {"q": "変な男だったので", "a": "A strange man"},
      {"q": "彼には友達がほとんどいなかった", "a": "he had few friends"},
      {"q": "変な男だったので、彼には友達がほとんどいなかった。", "a": "A strange man, he had few friends.", "full": true}
    ]
  },
  {
    "title": "若くて有能なので",
    "items": [
      {"q": "若くて有能なので", "a": "Young and capable"},
      {"q": "彼は社長から大いに期待されている", "a": "he is very much counted on by the president"},
      {"q": "若くて有能なので、彼は社長から大いに期待されている。", "a": "Young and capable, he is very much counted on by the president.", "full": true}
    ]
  },
  {
    "title": "わずか5歳にして",
    "items": [
      {"q": "わずか５歳にして", "a": "Only 5 years old"},
      {"q": "彼はその曲を弾くことができた", "a": "he could play the music"},
      {"q": "わずか５歳にして、彼はその曲を弾くことができた。", "a": "Only 5 years old, he could play the music.", "full": true}
    ]
  },
  {
    "title": "非常に失望したことに",
    "items": [
      {"q": "非常に失望した", "a": "I'm very disappointed"},
      {"q": "履歴書や面接の印象に基づく私の期待", "a": "my expectations based on his resume and the impression I got at the interview"},
      {"q": "彼は履歴書や面接の印象に基づく私の期待にかなわない", "a": "he does not come up to my expectations based on his resume and the impression I got at the interview"},
      {"q": "正直であることを除けば", "a": "except that he is honest"},
      {"q": "正直であることを除けば、彼は履歴書や面接の印象に基づく私の期待にかなわない", "a": "he does not come up to my expectations based on his resume and the impression I got at the interview except that he is honest"},
      {"q": "非常に失望したことに、正直であることを除けば、彼は履歴書や面接の印象に基づく私の期待にかなわない。", "a": "I'm very disappointed that he does not come up to my expectations based on his resume and the impression I got at the interview except that he is honest.", "full": true}
    ]
  },
  {
    "title": "彼を嫉む前に本当の理由を",
    "items": [
      {"q": "なぜ彼がそんなに若くして所長になったのか、本当の理由", "a": "the real reason why he became the manager so young"},
      {"q": "なぜ彼がそんなに若くして所長になったのか、本当の理由を知りなさい", "a": "You must know the real reason why he became the manager so young"},
      {"q": "彼を嫉んで、社長のコネだなんて噂を広める前に", "a": "before you envy him and spread rumors, saying that he has a kind of connection with the president"},
      {"q": "彼を嫉んで、社長のコネだなんて噂を広める前に、なぜ彼がそんなに若くして所長になったのか、本当の理由を知りなさい", "a": "You must know the real reason why he became the manager so young before you envy him and spread rumors, saying that he has a kind of connection with the president"},
      {"q": "自分ではあまり才能がないと思っていた", "a": "he thought he was not so talented"},
      {"q": "人の倍、働きまた勉強した", "a": "he worked and studied twice as much as the others"},
      {"q": "彼は自分ではあまり才能がないと思っていたので、人の倍、働きまた勉強したのだ", "a": "he worked and studied twice as much as the others as he thought he was not so talented"},
      {"q": "実際、彼は自分ではあまり才能がないと思っていたので、人の倍、働きまた勉強したのだ。", "a": "In fact, he worked and studied twice as much as the others as he thought he was not so talented."},
      {"q": "彼を嫉んで、社長のコネだなんて噂を広める前に、なぜ彼がそんなに若くして所長になったのか、本当の理由を知りなさい。実際、彼は自分ではあまり才能がないと思っていたので、人の倍、働きまた勉強したのだ。", "a": "You must know the real reason why he became the manager so young before you envy him and spread rumors, saying that he has a kind of connection with the president. In fact, he worked and studied twice as much as the others as he thought he was not so talented.", "full": true}
    ]
  },
  /* ▲ ここより上に追加 */
];
