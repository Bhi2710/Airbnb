import './App.css';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';
import starLogo from './assets/star.png';
import like from './assets/like.png';

function App() {

  const items=
  [
    {
      image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      star: starLogo,
      rating: "4.93(3,378) . India",
      like: like,
      name:"The Plague Doctor of Prague - Halloween Edition",
      rupee:"From ₹1,323/image"
    },
    {  
      image:"https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175__340.jpg",
      star: starLogo,
      rating: "4.93(3,378) . Indonecia",
      like: like,
      name:"Solve the Mystery Escape Room, also with Hallowee..",
      rupee:"From ₹1,923/image"
    },
    {  
      image:"https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg",
      star: starLogo,
      rating: "4.93(3,378) . UK",
      like: like,
      name:"Nature Beauty  with beauty full flowers",
      rupee:"From ₹1,272/image"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
      star: starLogo,
      rating: "4.93(3,378) . Italy",
      like: like,
      name:"Nature Beauty with beauty full mountains flowers",
      rupee:"From ₹2,028/image"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",
      star: starLogo,
      rating: "4.93(3,378) . India",
      like: like,
      name:"The Plague Birds of Prague - Halloween Edition",
      rupee:"From ₹1,323/image"
    },
    {  
      image:"https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
      star: starLogo,
      rating: "4.93(3,378) . US",
      like: like,
      name:"Nature Beauty  with beauty full flowers",
      rupee:"From ₹1,272/image"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      star: starLogo,
      rating: "4.93(3,378) . India",
      like: like,
      name:"Nature Beauty  with beauty full flowers",
      rupee:"From ₹1,298/image"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
      star: starLogo,
      rating: "4.93(3,378) . Italy",
      like: like,
      name:"Nature Beauty with beauty full mountains flowers",
      rupee:"From ₹2,028/image"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",
      star: starLogo,
      rating: "4.93(3,378) . India",
      like: like,
      name:"The Plague Birds of Prague - Halloween Edition",
      rupee:"From ₹1,323/image"
    },
  ];

  const NewWeek=[

    {
      image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
      para:"Collection",
      heading:"Most popular around the world",
      buttons:"Show all"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",
      para:"Collection",
      heading:"Great fro team building",
      buttons:"Show all"
    },
    {  
      image:"https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",
      para:"Collection",
      heading:"Fun for the world",
      buttons:"Show all"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
      para:"Collection",
      heading:"Most popular around the world",
      buttons:"Show all"
    },
    {
      image:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",
      para:"Collection",
      heading:"Great fro team building",
      buttons:"Show all"
    },

  ];

  return (
    <div className="App">
      <Header />
      <div>
        <div className='Top_seller'>
          <div className='Top_seller_left'>
            <h4>Top Sellers</h4>
          </div>
          <div className='Top_seller_right'>
            <span>Show(107)</span>
            <div className='span_1st'>
              <span>&lt;</span>
            </div>
            <div className='span_1st'>
              <span>&gt;</span>
            </div>
          </div>
        </div>
        <div className='Middle_section'>
        {items.map((e,idx) =>{
          return(
            <Middle image={e.image} star={e.star} rating={e.rating} like={e.like} name={e.name} rupee={e.rupee} />
          )
        })}
        </div>  
      </div>
        <div className='Top_seller'>
          <div className='Top_seller_left'>
            <h3>New this week</h3>
          </div>
          <div className='Top_seller_right'>
            <div className='span_1st'>
              <span>&lt;</span>
            </div>
            <div className='span_1st'>
              <span>&gt;</span>
            </div>
          </div>
        </div>
        <div className='Footer_section'>
        {NewWeek.map((element,idx1)=>{
          return(
            <Footer image={element.image} para={element.para} heading={element.heading} buttons={element.buttons}/>
          )
        })}
        </div>
        <div className='button_items'>
          <button>Date</button>
          <button>Group&nbsp;site</button>
          <button>More&nbsp;Offers</button>
          <button>Family&nbsp;-&nbsp;friends</button>
          <button>Animals</button>
          <button>Arts&nbsp;writing</button>
          <button>Backing</button>
          <button>Cooking</button>
          <button>Dance</button>
          <button>Drinks</button>
          <button>Time</button>
          <button>Zone</button>
          <button>friends</button>
          <button>Day&nbsp;Time</button>
          <button>Arts&nbsp;writing</button>
          <button>Backing</button>
          <button>Cooking</button>
          <button>Dance</button>
          <button>Drinks</button>
        </div>
    </div>
  );
}

export default App;
