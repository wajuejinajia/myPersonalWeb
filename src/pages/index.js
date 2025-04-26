import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={`hero__title ${styles.animatedTitle}`}>{siteConfig.title}</h1>
            <p className={`hero__subtitle ${styles.animatedSubtitle}`}>{siteConfig.tagline}</p>
          </div>
          <div className={styles.headerImage}>
            <img 
              src="/img/ChatGPT Image 2025年4月1日 10_31_41.png" 
              alt="蔡家乐的照片" 
              className={styles.profileImageHeader}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

const hobbyDetails = {

  films: {
    title: "Films",
    icon: "🎬",
    description: "Films",
    // 更新为电影列表和海报信息
    topMovies: [
      { title: "The Godther", poster: "/img/hobbies/films/godfather.webp" },
      { title: "The Dark Knight", poster: "/img/hobbies/films/dark_knight.webp" },
      { title: "The Bourne Ultimatum", poster: "/img/hobbies/films/bourne_ultimatum.webp" },
      { title: "Oasis", poster: "/img/hobbies/films/oasis.webp" },
      { title: "The Other Side Of Hope", poster: "/img/hobbies/films/other_side_of_hope.webp" },
      { title: "The Wages Of Fear", poster: "/img/hobbies/films/wages_of_fear.webp" },
      { title: "Friends", poster: "/img/hobbies/films/friends.webp" },
    ],
    image: "/img/hobbies/films_banner.webp" // 可以保留一个主图或移除
  },
  travel: {
    title: "Travel",
    icon: "🏔️",
    description: "Travel",
    // 移除 image: "/img/hobbies/china_map.svg",
    // 移除 visitedCities: [ ... ]
    // 新增：包含地点名称和照片的数组
    visitedPlaces: [
      { name: "Chong Qing", photo: "/img/hobbies/travel/chongqing.webp" },
      { name: "Gui Yang", photo: "/img/hobbies/travel/guiyang.webp" },
      { name: "Shang Hai", photo: "/img/hobbies/travel/shanghai.webp" },
      { name: "Hang Zhou", photo: "/img/hobbies/travel/hangzhou.webp" },
      { name: "Nan Jing", photo: "/img/hobbies/travel/nanjing.webp" },
      { name: "Cheng Du", photo: "/img/hobbies/travel/chengdu.webp" },
      { name: "Zun Yi", photo: "/img/hobbies/travel/zunyi.webp" },
      { name: "Bei jing", photo: "/img/hobbies/travel/beijing.webp" },
      { name: "Wu Han", photo: "/img/hobbies/travel/wuhan.webp" },
      { name: "Yan Tai", photo: "/img/hobbies/travel/yantai.webp" },
      { name: "Da Tong", photo: "/img/hobbies/travel/datong.webp" },
      { name: "Qing Dao", photo: "/img/hobbies/travel/qingdao.webp" },
      { name: "Ri Zhao", photo: "/img/hobbies/travel/rizhao.webp" },
      { name: "Xi Ning", photo: "/img/hobbies/travel/xining.webp" },
      { name: "Guang Zhou", photo: "/img/hobbies/travel/guangzhou.webp" },
      { name: "Shan Tou", photo: "/img/hobbies/travel/shantou.webp" },
      { name: "Hoh hot", photo: "/img/hobbies/travel/hohhot.webp" }, // 注意呼和浩特的英文拼写或使用拼音
      { name: "Erdos", photo: "/img/hobbies/travel/erdos.webp" }, // 注意呼和浩特的英文拼写或使用拼音
    ]
  },
  football: {
    title: "Football",
    icon: "⚽️",
    description: "Football",
    // 移除旧的 details 数组
    // 移除旧的 image 路径 (如果不需要主图)
    // 新增：结构化足球信息
    team: {
      name: "Manchester City",
      logo: "/img/hobbies/mancity.png" // 保持队徽图片
    },
    player: {
      name: "Kevin De Bruyne",
      // 可以选择性添加球员照片
      // photo: "/img/hobbies/football/debruyne.webp"
    },
    favoriteGame: "Manchester City vs Inter Milan (UCL Final)"
  },
  reading: {
    title: "Reading",
    icon: "📚",
    description: "Reading",
    favoriteBooks: [
      { title: "鹿川有许多粪", author: "李沧东", cover: "/img/hobbies/reading/dearHillHasSoManyShit.jpg" },
      { title: "基地系列", author: "阿西莫夫", cover: "/img/hobbies/reading/foundation.webp" },
      { title: "JavaScript高级程序设计", author: "Nicholas C. Zakas", cover: "/img/hobbies/reading/js_pro.webp" },
      { title: "深入理解计算机系统", author: "Randal E. Bryant", cover: "/img/hobbies/reading/csapp.webp" },
      { title: "算法导论", author: "Thomas H. Cormen", cover: "/img/hobbies/reading/clrs.webp" },
      // 你可以添加更多书籍
    ]
  },
};

// 修改 HobbyItem 组件，移除内部详情显示，添加选中状态样式
function HobbyItem({ hobby, isSelected, onHover }) {
  const hobbyInfo = hobbyDetails[hobby];
  
  return (
    <div 
      className={clsx(styles.hobbyItem, { [styles.hobbyItemSelected]: isSelected })} // 添加选中状态类
      onMouseEnter={() => onHover(hobby)}
      // 可以考虑移除 onMouseLeave 或改为 onClick 触发选中
      // onMouseLeave={() => onHover(null)} 
    >
      <div className={styles.hobbyIcon}>{hobbyInfo.icon}</div>
      <p>{hobbyInfo.description}</p>
      {/* 移除内部详情显示 */}
    </div>
  );
}

// 修改 Home 组件
export default function Home() {
  const [selectedHobby, setSelectedHobby] = useState(null); // 改为 selectedHobby
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    // 添加滚动动画效果
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const currentHobbyDetails = selectedHobby ? hobbyDetails[selectedHobby] : null;

  return (
    <Layout
      title={`Welcome to my website`}
      description="Welcome to my website">
      <HomepageHeader />
      <main>
        {/* Apple 风格的内容区域 */}
        <section className={styles.appleSection}>
          <div className="container">
            <div className={`${styles.fadeIn} ${styles.appleHeadline}`}>
              <h2>About me</h2>
              <p className={styles.appleSubtitle}>
              Hello! I'm Cai Jiale, welcome to my personal website. 
              I'm a developer who loves technology and is passionate about programming and new technologies. 
              I believe technology can change the world and I'm committed to creating valuable products through my skills.
              </p>
            </div>
          </div>
        </section>

        {/* 技能部分 - Apple 风格 */}
        <section className={`${styles.appleSection} ${styles.grayBg}`}>
          <div className="container">
            <div className={`${styles.fadeIn} ${styles.appleFeatures}`}>
              <h2>Skills</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🌐</div>
                  <h3>Front-end develop</h3>
                  <p>React, Vue, JavaScript, HTML, CSS</p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔧</div>
                  <h3>Tools</h3>
                  <p>Git, VScode, Chrome DevTools</p>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🎨</div>
                  <h3>Design</h3>  {/* 修正 "Desigh" 为 "Design" */}
                  <p>Ant-Design, Element-plus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 兴趣爱好部分 */}
        <section className={styles.appleSection}>
          <div className="container">
            <div className={`${styles.fadeIn} ${styles.appleHeadline}`}>
              <h2>Hobbies</h2>
              <div className={styles.hobbyGrid}>
                {Object.keys(hobbyDetails).map((hobby) => (
                  <HobbyItem
                    key={hobby}
                    hobby={hobby}
                    isSelected={selectedHobby === hobby} // 使用 isSelected
                    onHover={setSelectedHobby} // 鼠标悬停时设置选中的爱好
                  />
                ))}
              </div>
            </div>
            
            {/* 更新：爱好详情展示区域 */}
            {currentHobbyDetails && (
              <div className={`${styles.hobbyDetailSection} ${styles.fadeIn} ${styles.visible}`}>
                <h3>{currentHobbyDetails.title}</h3>
                
                {/* 条件渲染 */}
                {selectedHobby === 'films' && currentHobbyDetails.topMovies ? (
                  <div className={styles.movieGrid}>
                    <div className={styles.moviePosters}>
                      {currentHobbyDetails.topMovies.map((movie, index) => (
                        <div key={index} className={styles.movieItem}>
                          <img 
                            src={movie.poster} 
                            alt={`${movie.title} Poster`} 
                            className={styles.moviePosterImage}
                            loading="lazy" // 懒加载提高性能
                          />
                          <p className={styles.movieTitle}>{movie.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedHobby === 'travel' && currentHobbyDetails.visitedPlaces ? (
                  // 修改：条件渲染旅行详情 - 使用图片网格
                  <div className={styles.travelGrid}>
                    <h4>我去过的地方</h4>
                    <div className={styles.placePhotos}>
                      {currentHobbyDetails.visitedPlaces.map((place, index) => (
                        <div key={index} className={styles.placeItem}>
                          <img
                            src={place.photo}
                            alt={`${place.name} Photo`}
                            className={styles.placePhotoImage}
                            loading="lazy"
                          />
                          <p className={styles.placeName}>{place.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedHobby === 'reading' && currentHobbyDetails.favoriteBooks ? ( // <--- 添加这个 else if 判断
                  // 读书详情 - 使用书籍封面网格
                  <div className={styles.readingGrid}>
                    <h4>我喜欢的书籍</h4>
                    <div className={styles.bookCovers}>
                      {currentHobbyDetails.favoriteBooks.map((book, index) => (
                        <div key={index} className={styles.bookItem}>
                          <img
                            src={book.cover}
                            alt={`${book.title} Cover`}
                            className={styles.bookCoverImage}
                            loading="lazy"
                          />
                          <p className={styles.bookTitle}>{book.title}</p>
                          <p className={styles.bookAuthor}>{book.author}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedHobby === 'football' && currentHobbyDetails.team ? ( // <--- 修改这里的判断条件
                  // 新增：条件渲染足球详情 - 两行布局
                  <div className={styles.footballDetailLayout}>
                    {/* 第一行：球队和球员 */}
                    <div className={styles.footballRow}>
                      <div className={styles.footballItem}>
                        <h4>My Team</h4>
                        {currentHobbyDetails.team.logo && (
                          <img src={currentHobbyDetails.team.logo} alt={`${currentHobbyDetails.team.name} Logo`} className={styles.teamLogo} />
                        )}
                        <p>{currentHobbyDetails.team.name}</p>
                      </div>
                      <div className={styles.footballItem}>
                        <h4>Best Player</h4>
                        {/* 如果有球员照片可以取消注释
                        {currentHobbyDetails.player.photo && (
                          <img src={currentHobbyDetails.player.photo} alt={currentHobbyDetails.player.name} className={styles.playerPhoto} />
                        )}
                        */}
                        <p>{currentHobbyDetails.player.name}</p>
                      </div>
                    </div>
                    {/* 第二行：最喜欢的比赛 */}
                    <div className={styles.footballRow}>
                       <div className={styles.footballItemFull}>
                         <h4>Best Game</h4>
                         <p>{currentHobbyDetails.favoriteGame}</p>
                       </div>
                    </div>
                  </div>
                ) : (
                  // 其他未特殊处理的爱好（如果有的话）
                  <div className={styles.hobbyDetailContent}>
                    {/* 可以保留一个通用布局或显示提示信息 */}
                    <p>Details coming soon...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
