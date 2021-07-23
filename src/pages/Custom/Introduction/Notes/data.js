const topNote = {
  title: '前調',
  titleEn: 'Top Notes',
  explanation:
    '前調又可稱作前味、高音調，通常是由比較小的分子所構成，大約在10分鐘左右所散發出來的香氣。味道比較容易讓人有煥然一新、提起精神的感受，也像一首旋律中的高音引人注目、與令人印象深刻。\n\n常用的前調，比較會是屬於果香、花香調。這類香氣往往能給人一種清新感，而且酸酸甜甜的，容易讓人著迷。\n\n其常用的有像是薄荷、檸檬、柑橘、佛手柑、快樂鼠尾草、薰衣草等等。\n',
  types: [
    {
      name: '果香調',
      nameEn: 'Fruity',
      list: ['蜜桃', '蘋果', '紅莓'],
      image: '/images/custom/intro/notes/top-fruity.png',
    },
    {
      name: '柑橘香調',
      nameEn: 'Citrus',
      list: ['檸檬', '甜橙', '柚子'],
      image: '/images/custom/intro/notes/top-citrus.png',
    },
    {
      name: '草本香調',
      nameEn: 'Herbal',
      list: ['薰衣草', '鼠尾草', '薄荷'],
      image: '/images/custom/intro/notes/top-herbal.png',
    },
  ],
}

const middleNote = {
  title: '中調',
  titleEn: 'Middle Notes',
  explanation:
    '中調又可叫做中味、中音，通常是由比較大的分子所構成，時間莫約在30~40分鐘後會出現，一般來說會持續大約數小時或是更久的時間。以一首曲子來說呢，中調是一首曲子的主題，就是曲子的重點。是一瓶香水中的主角，是香水所要傳達的精神！\n\n中調比較常使用的是花香類，有時候會有木香或是微量的辛辣香，不過不管中調的味道是清新或是濃郁的，和前調都必須會有很好的銜接，才能有整體的感受。其常用精油有玫瑰、依蘭、薰衣草、肉豆蔻、黑胡椒、天竺葵等等。\n\n',
  types: [
    {
      name: '木質香調',
      nameEn: 'Woody',
      list: ['雪松', '岩蘭草', '檀香'],
      image: '/images/custom/intro/notes/mid-wood.png',
    },
    {
      name: '草本香調',
      nameEn: 'Herbal',
      list: ['薰衣草', '鼠尾草', '薄荷'],
      image: '/images/custom/intro/notes/mid-herbal.png',
    },
    {
      name: '花香調',
      nameEn: 'Floral',
      list: ['玫瑰', '茉莉', '含羞草'],
      image: '/images/custom/intro/notes/mid-floral.png',
    },
  ],
}

const baseNote = {
  title: '後調',
  titleEn: 'Base Notes',
  explanation:
    '後調又可叫做後味、低音或基調，是由最大的分子所構成，後調大約在2 ~ 3小時左右會出現，就一首曲子的結尾而言，有將結束的含意，因此這部分會使用的香氣是屬於會逐漸化成淡淡的餘味的，是香水展現最後的溫暖餘韻的時刻。\n\n常用的後調，較常使用到木質香或動物香，香味是能夠持續一段很長的時間，木質香通常也會令人感到成熟、穩重，而動物香氣簡而言就是賀爾蒙的氣味，能讓人為之著迷；其常使用的精油包含了雪松、檀香、乳香、沒藥、麝香、琥珀...等等。\n\n',
  types: [
    {
      name: '香脂香調',
      nameEn: 'Ambery',
      list: ['岩玫瑰', '沒藥', '香草'],
      image: '/images/custom/intro/notes/base-ambery.png',
    },
    {
      name: '木質香調',
      nameEn: 'Woody',
      list: ['雪松', '岩蘭草', '檀香'],
      image: '/images/custom/intro/notes/base-wood.png',
    },
  ],
}

export { topNote, middleNote, baseNote }
