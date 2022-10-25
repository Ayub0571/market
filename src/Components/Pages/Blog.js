import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import './Blog.css'


const Blog = () => {
  
  return (
    <Container>
    <Row>

        <div className="comand row">
        <Col xl={4} lg={4} md={6} sm={8} xs={12}>

          <div>
              <img
                src="https://res.klook.com/image/upload/c_fill,w_750,h_500,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/bwiuscbakd8fbiuinlne.jpg"
                alt="1"
                className="img1" />
          </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={8} xs={12}>
          <div>
              
              <img
                src="https://www.azamara.com/sites/default/files/heros/fish_in_the_sea_0.jpg"
                alt="2"
                className="img1" />
              
              {/* <button>Узнать подробнее про меня</button> */}
          </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={8} xs={12}>
          <div>
              
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/019/906/789/large/natalia-sychova-rif-light.jpg?1565533547"
                alt="3"
                className="img1" />
                
          </div>
          </Col>
          <Col xl={12} lg={8} md={6} sm={12} xs={8}>
          <div>
              
             
              <h1>Интересные факты о подводном мире</h1>
              <p>
                Факт 1. В подводном мире всегда царят спокойствие и тишина. Даже при самых сильных штормах, когда на поверхности морей и океанов вздымаются 
                многометровые волны, на глубине всего в полсотни метров уже нет никаких признаков буйства стихии наверху. Температура воды на такой глубине 
                тоже практически не изменяется в течение года, как и уровень её солёности.<br/><br/>

                Факт 2. В настоящее время подводному миру в том виде, в каком мы его знаем, угрожает исчезновение. Глобальное потепление привело к тому, что 
                температура океанских вод в тропическом поясе поднялась почти на 1 градус за последние десятилетия, и эта разница критична для кораллов. Свой 
                негативный вклад вносит и загрязнение вод, так что сейчас примерно 70% коралловых рифов угрожает исчезновение. Медленно умирает даже Большой 
                Барьерный риф, самое большое сооружение на Земле, выстроенное живыми существами.<br/><br/>

                Факт 3. Пейзажи подводного мира изумительно красивы, но мы не можем насладиться ими, потому что они погружены во тьму. Но в центральной части 
                дна каждого океана возвышаются могучие горные хребты, которые по длине достигают 40.000 километров, что сравнимо с протяжённостью земного 
                экватора. Вместо лесов здесь кораллы и актинии, а вместо птиц и животных – рыбы и моллюски.<br/><br/>

                Факт 4. Практически весь подводный мир приспособлен к жизни в солёной воде. Как подсчитали учёные, весь объём пресной воды, попадающий 
                ежегодно в Мировой океан из рек и дождей, способен образовать лишь 1,25-метровый слой на его поверхности. Таким образом, уровень солёности 
                вод Мирового океана практически не изменяется.<br/><br/>

                Факт 5. Мы привыкли к солнечному свету, но для обитателей подводного мира он является чем-то невероятный. Солнечные лучи проникают на глубину 
                десятков метров, но на этом всё, поэтому почти вся подводная часть Земли лежит в царстве вечной тьмы.<br/><br/>

                Факт 6. Несмотря на все достижения современной науки, большая часть подводного мира до сих пор не изучена. Так, о существовании срединных 
                океанических хребтов учёные узнали только в середине XX века, а зоологи и по сей день регулярно открывают новые виды морских обитателей.<br/><br/> 

                Факт 7. Очень интересно такое явление, как глубоководный гигантизм. Благодаря нему различные беспозвоночные, например, гигантские кальмары 
                и ракообразные, обитающие на больших глубинах, вырастают до более крупных размеров, чем их менее глубоководные близкие родственники.<br/><br/>

                Факт 8. Заметное влияние на химический состав вод оказывают так называемые чёрные курильщики, гидротермальные химические источники, имеющиеся 
                во всех океанах. Они извергают настолько насыщенную минералами воду, что она напоминает рассол, нагретую до высоких температур, причём выходит 
                эта вода под давлением во много сотен атмосфер. Температура воды может достигать 400 °C, но она всё равно не закипает из-за высокого давления.<br/><br/>

                Факт 9. Подводный мир подчиняется своим законам, которые до сих пор остаются загадкой. Так, некоторые виды рыб, черепах и других обитателей 
                Мирового океана для размножения отправляются в определённые места на Земле, преодолевая при этом много тысяч километров и рискуя жизнью.<br/><br/> 

                Факт 10. Самой серьёзной угрозой для подводного мира является загрязнение. В Тихом океане уже существует мусорное пятно площадью в 1,5 
                млн км²! Ежегодно в океанские и морские воды попадают миллионы тонн отходов, включая токсичные.<br/><br/>
              </p>

              {/* <button>Узнать подробнее про меня</button> */}
          </div>
          </Col>
        </div>
   
     </Row>
   </Container>

  );
};
export default  Blog ;
