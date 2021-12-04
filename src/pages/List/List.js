import React from 'react';
import './List.scss';
import Nav from '../../components/Nav/Nav';

function CoffeeCard(props) {
  return (
    <div className="coffee-card">
      <img src={props.src} alt="사진" width="200px" height="200px" />
      <p>{props.title}</p>
    </div>
  );
}

function CoffeeCategoryTitle(props) {
  return (
    <div className="coffee-category-title">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

function CoffeeCategory(props) {
  return (
    <div className="coffee-category">
      <CoffeeCategoryTitle title={props.title} content={props.content} />
      <div className="coffee-card-wrap">
        {coffeeCardData[props.index].map((data, index) => {
          return <CoffeeCard title={data.title} src={data.img} key={index} />;
        })}
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="list">
      <Nav />
      {coffeeCategoryData.map((data, index) => {
        return (
          <CoffeeCategory
            title={data.title}
            content={data.content}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

const coffeeCardData = [
  [
    {
      id: 1,
      title: '토피 넛 콜드 브루',
      img: '/images/coffee1.jpg',
    },
    {
      id: 2,
      title: '나이트로 바닐라 크림',
      img: '/images/coffee2.jpg',
    },
    {
      id: 33,
      title: '나이트로 콜드 브루',
      img: '/images/coffee3.jpg',
    },
    {
      id: 4,
      title: '돌체 콜드 브루',
      img: '/images/coffee4.jpg',
    },
    {
      id: 5,
      title: '바닐라 크림 콜드 브루',
      img: '/images/coffee5.jpg',
    },
    {
      id: 6,
      title: '벨벳 다크 모카 나이트로',
      img: '/images/coffee1.jpg',
    },
    {
      id: 7,
      title: '시그니처 더 블랙 콜드 브루',
      img: '/images/coffee2.jpg',
    },
    {
      id: 8,
      title: '제주 비자림 콜드 브루',
      img: '/images/coffee3.jpg',
    },
    {
      id: 9,
      title: '마라탕',
      img: '/images/마라탕.jpg',
    },
    {
      id: 10,
      title: '토피 넛 콜드 브루',
      img: '/images/coffee4.jpg',
    },
    {
      id: 11,
      title: '콜드 브루 몰트',
      img: '/images/coffee5.jpg',
    },
    {
      id: 12,
      title: '콜드 브루 오트 라떼',
      img: '/images/coffee1.jpg',
    },
    {
      id: 13,
      title: '콜드 브루 플로트',
      img: '/images/coffee2.jpg',
    },
    {
      id: 14,
      title: '프렌치 애플 타르트 나이트로',
      img: '/images/coffee3.jpg',
    },
  ],
  [
    {
      id: 15,
      title: '아이스 커피',
      img: '/images/coffee4.jpg',
    },
    {
      id: 16,
      title: '오늘의 커피',
      img: '/images/coffee5.jpg',
    },
  ],
];

const coffeeCategoryData = [
  {
    id: 1,
    title: '콜드 브루 커피',
    content: '디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)',
  },
  {
    id: 2,
    title: '브루드 커피',
    content: '디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)',
  },
];

export default List;
