const PRODUCTS = [
  {
    id: 'handmade-1', shop: 'handmade', featured: true, category: '꽃·액자', badge: 'BEST',
    name: '해바라기 LED액자 페이퍼플라워 핸드메이드 집들이 개업 선물 돈들어오는 풍수 인테리어 액자',
    shortName: '해바라기 LED 액자', price: 69000, originalPrice: 149000, rating: 5.0, reviews: 7,
    images: ['handmade-featured-1-01.JPG','handmade-featured-1-02.JPG','handmade-featured-1-03.JPG','handmade-featured-1-04.JPG'],
    description: '빛이 은은하게 퍼지는 해바라기 페이퍼플라워 LED 아크릴 액자입니다.'
  },
  {
    id: 'handmade-2', shop: 'handmade', featured: true, category: '꽃·화분', badge: 'BEST',
    name: '개업화분 승진화분 인사이동 축하난', shortName: '축하난 LED 화분',
    price: 130000, originalPrice: 220000, rating: 0, reviews: 0,
    images: ['handmade-featured-2-01.JPG','handmade-featured-2-02.JPG','handmade-featured-2-03.JPG','handmade-featured-2-04.JPG'],
    description: '개업, 승진, 인사이동 등 특별한 날의 마음을 전하는 핸드메이드 축하 화분입니다.'
  },
  {
    id: 'handmade-3', shop: 'handmade', featured: true, category: '꽃·액자', badge: 'BEST',
    name: '[캔버스/무드등] 평화와 희망의 상징, 데이지🌼', shortName: '데이지 캔버스 무드등',
    price: 90000, originalPrice: 140000, rating: 5.0, reviews: 1,
    images: ['handmade-featured-3-01.JPG','handmade-featured-3-02.JPG','handmade-featured-3-03.JPG','handmade-featured-3-04.JPG'],
    description: '평화와 희망의 상징인 데이지를 입체 페이퍼플라워와 조명으로 표현한 캔버스 무드등입니다.'
  },
  {
    id: 'handmade-4', shop: 'handmade', featured: true, category: '크리스마스', badge: 'SEASON',
    name: '크리스마스 미니트리 유리돔(B타입) 핸드메이드 성탄절 장식 소품 LED 무드등', shortName: '크리스마스 미니트리 유리돔 B',
    price: 45000, originalPrice: 66000, rating: 0, reviews: 0,
    images: ['handmade-featured-4-01.JPG','handmade-featured-4-02.JPG','handmade-featured-4-03.JPG','handmade-featured-4-04.PNG'],
    description: '작은 공간에도 따뜻한 크리스마스 분위기를 더하는 B타입 미니트리 유리돔 LED 무드등입니다.'
  },
  {id:'handmade-5',shop:'handmade',featured:false,category:'크리스마스',badge:'SEASON',name:'크리스마스 미니트리 유리돔(A타입) 핸드메이드 성탄절 장식 소품 LED 무드등',shortName:'크리스마스 미니트리 유리돔 A',price:45000,originalPrice:66000,rating:5.0,reviews:1,images:['handmade-extra-1-01.JPG','handmade-extra-1-02.JPG','handmade-extra-1-03.JPG'],description:'핸드메이드 페이퍼플라워 트리와 따뜻한 LED 조명이 어우러진 A타입 유리돔 무드등입니다.'},
  {id:'handmade-6',shop:'handmade',featured:false,category:'크리스마스',name:'크리스마스 미니트리 액자(A타입) 핸드메이드 성탄절 장식 소품 LED 무드등',shortName:'크리스마스 미니트리 액자 A',price:35000,originalPrice:49000,rating:0,reviews:0,images:['handmade-extra-2-01.JPG','handmade-extra-2-02.JPG','handmade-extra-2-03.JPG'],description:'액자 속 입체 미니트리와 LED 조명을 함께 즐길 수 있는 A타입 시즌 작품입니다.'},
  {id:'handmade-7',shop:'handmade',featured:false,category:'크리스마스',name:'크리스마스 미니트리 액자(B타입) 핸드메이드 성탄절 장식 소품 LED 무드등',shortName:'크리스마스 미니트리 액자 B',price:42000,originalPrice:56000,rating:0,reviews:0,images:['handmade-extra-3-01.JPG','handmade-extra-3-02.JPG','handmade-extra-3-03.JPG'],description:'화분형 미니트리와 작은 겨울 소품을 액자 안에 담은 B타입 크리스마스 LED 작품입니다.'},
  {id:'handmade-8',shop:'handmade',featured:false,category:'선물',name:'카네이션 액자 민화 LED 핸드메이드 가정의달 어버이날 스승의날 감사선물 집들이선물',shortName:'카네이션 민화 LED 액자',price:31000,originalPrice:49000,rating:5.0,reviews:39,images:['handmade-extra-4-01.JPG','handmade-extra-4-02.JPG','handmade-extra-4-03.JPG'],description:'감사의 마음을 전하기 좋은 카네이션 민화 디자인 LED 액자입니다.'},
  {id:'handmade-9',shop:'handmade',featured:false,category:'꽃·액자',name:'해바라기액자 해바라기그림 핸드메이드 풍수지리인테리어 돈들어오는그림 페이퍼플라워 무드등',shortName:'해바라기 페이퍼플라워 무드등',price:90000,originalPrice:140000,rating:5.0,reviews:1,images:['handmade-extra-5-01.JPG','handmade-extra-5-02.JPG','handmade-extra-5-03.JPG'],description:'입체적인 해바라기 페이퍼플라워가 공간에 밝은 포인트를 더하는 무드등 작품입니다.'},
  {id:'handmade-10',shop:'handmade',featured:false,category:'선물',name:'[유리돔/무드등/고백선물] 사랑의 장미 발렌타인데이&화이트데이',shortName:'사랑의 장미 유리돔',price:49000,originalPrice:65000,rating:0,reviews:0,images:['handmade-extra-6-01.JPG','handmade-extra-6-02.JPG','handmade-extra-6-03.JPG'],description:'소중한 마음을 전하는 장미 유리돔 LED 무드등입니다.'},
  {id:'handmade-11',shop:'handmade',featured:false,category:'꽃·화분',name:"[화분/무드등/메시지카드] '순결, 절세미인' 벚꽃",shortName:'벚꽃 화분 무드등',price:170000,originalPrice:250000,rating:0,reviews:0,images:['handmade-extra-7-01.JPG','handmade-extra-7-02.JPG','handmade-extra-7-03.JPG'],description:'벚꽃의 아름다움을 핸드메이드 플라워와 조명으로 담은 메시지카드 구성 화분입니다.'},

  {id:'cat-1',shop:'cat',featured:true,category:'스크래처·캣타워',badge:'NEW',name:'스크래쳐의 정석(베이직) 고양이 스크래처 소형 미니 캣타워 고양이해먹 쿠션 방석',shortName:'스크래쳐의 정석 베이직',price:45000,originalPrice:108000,rating:0,reviews:0,images:['cat-01-01.JPG','cat-01-03.JPG'],description:'스크래처와 휴식 공간을 함께 구성한 소형 미니 캣타워입니다.'},
  {id:'cat-2',shop:'cat',featured:true,category:'창틀전망대',badge:'BEST',name:'창틀전망대(기본형) 고양이 미니 캣타워 스크래처 창문해먹 선반 캣워크',shortName:'창틀전망대 기본형',price:26000,originalPrice:86000,rating:4.82,reviews:929,images:['cat-02-01.JPG','cat-02-02.JPG','cat-02-03.JPG'],description:'창밖을 좋아하는 고양이를 위한 실용적인 창틀 전망대 기본형입니다.'},
  {id:'cat-3',shop:'cat',featured:true,category:'창틀전망대',badge:'BEST',name:'창틀전망대 에어(AIR) 고양이 미니 캣타워 스크래처 창문해먹 선반 캣워크',shortName:'창틀전망대 AIR',price:43000,originalPrice:99000,rating:5.0,reviews:37,images:['cat-03-01.JPG','cat-03-02.JPG','cat-03-03.JPG'],description:'창문을 닫은 상태에서도 편안하게 바깥을 바라볼 수 있도록 설계한 AIR 타입 전망대입니다.'},
  {id:'cat-4',shop:'cat',featured:true,category:'하우스·침대',badge:'BEST',name:'냥냥이 코타츠 고양이 숨숨집 미니 캣타워 캣하우스 침대 터널 스크래처 고양이 방석 쿠션',shortName:'냥냥이 코타츠',price:87000,originalPrice:169000,rating:5.0,reviews:14,images:['cat-04-01.JPG','cat-04-02.JPG','cat-04-03.JPG'],description:'숨기, 쉬기, 긁기를 한 공간에서 즐길 수 있는 고양이 코타츠형 캣하우스입니다.'},
  {id:'cat-5',shop:'cat',featured:false,category:'미용·관리',name:'고양이빗 강아지 브러쉬 원터치 슬리커 펫브러쉬 고양이용품',shortName:'원터치 슬리커 펫브러쉬',price:5900,originalPrice:7900,rating:4.83,reviews:52,images:['cat-05-01.JPG','cat-05-02.JPG','cat-05-03.JPG'],description:'빗질 후 털을 간편하게 분리할 수 있는 원터치 슬리커 브러쉬입니다.'},
  {id:'cat-6',shop:'cat',featured:false,category:'장난감',name:'고양이 멜로디 인형 셀프 사냥놀이 소리나는 장난감 고양이용품',shortName:'멜로디 사냥놀이 인형',price:4900,originalPrice:6900,rating:5.0,reviews:3,images:['cat-06-01.JPG','cat-06-02.JPG','cat-06-03.JPG'],description:'소리와 움직임으로 고양이의 호기심을 자극하는 셀프 사냥놀이 장난감입니다.'}
];

const SHIPPING_POLICY = {
  fee: 3000,
  remoteExtra: 5000,
  courier: '한진택배',
  leadTime: '결제 완료 후 영업일 5일 이내 발송',
  customNotice: '맞춤제작 상품은 제작 착수 후 취소·교환·반품이 제한됩니다.'
};
