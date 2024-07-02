import HeaderImg from "../../Images/8.jpg";
import AboutImg from "../../Images/home_about.jpg";
import Img1 from "../../Images/96.jpg";
import Img2 from "../../Images/9.jpg";
import Img3 from "../../Images/7.jpg";
import second_header from "../../Images/10.jpg";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="header">
        <div>
          <div className="img">
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="HeaderContent">
          <h6>
            {" "}
             בוא תפתח את חלום 
            <span> חייך </span> 
          </h6>
          <button className="btn">קרא עוד</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about container">
        <div className="row">
          <div className="col-sm-5">
            <img src={AboutImg} className="img-fluid" alt="" />
          </div>

          <div className="col-sm-6">
            <h6>מיטב הפרוייקטים מותאמים ליכולות של הילד שלך</h6>
            <h5>אין כמו פרויקט טוב כדי לקדם את הילד שלך</h5>
            <p>
            אין כמו פרויקט טוב כדי לקדם את הילד שלך בעולם המודרני והדיגיטלי של היום. פרויקטים הם דרך מצוינת לעודד את הילדים לפתח כישורים חדשים, לחשוב בצורה יצירתית ולפתור בעיות. כשהילדים משתתפים בפרויקטים מעשיים, הם לא רק לומדים טכנולוגיה, אלא גם מפתחים מיומנויות חשובות נוספות כמו עבודה בצוות, התמדה וביטחון עצמי.

לימוד באמצעות פרויקטים
לימוד באמצעות פרויקטים הוא גישה חינוכית המשלבת תיאוריה ופרקטיקה. דרך זו מעודדת את הילדים לחקור, להתנסות ולהפיק תוצרים מוחשיים מהידע שרכשו. ילדים לומדים טוב יותר כאשר הם מעורבים בתהליך יצירה אישי ופעיל. הפרויקטים מעוררים בהם סקרנות ומוטיבציה ומאפשרים להם לראות את התוצאות המיידיות של עבודתם.

פרויקטים בטכנולוגיה
העולם הדיגיטלי מציע שפע של פרויקטים בתחום הטכנולוגיה שילדים יכולים להשתתף בהם:

בניית אתרים: לימוד HTML ו-CSS כדי ליצור אתרים פשוטים ואישיים.
תכנות משחקים: יצירת משחקי מחשב פשוטים עם פלטפורמות כמו Scratch.
רובוטיקה: בניית רובוטים ותכנותם לביצוע משימות.
אלקטרוניקה: פרויקטים בסיסיים של אלקטרוניקה כמו בניית מעגלים פשוטים.
עיצוב גרפי: יצירת איורים ואנימציות דיגיטליות.
אפליקציות מובייל: פיתוח אפליקציות פשוטות לסמארטפון.
היתרונות של השתתפות בפרויקטים
ישנם יתרונות רבים להשתתפות בפרויקטים מעשיים:

כישורים טכניים: הילדים רוכשים כישורים טכניים מעשיים שמכינים אותם לעתיד.
פתרון בעיות: פרויקטים דורשים מהילדים להתמודד עם בעיות ולמצוא להן פתרונות יצירתיים.
עבודת צוות: בפרויקטים רבים יש צורך בעבודת צוות, מה שמפתח יכולות תקשורת ושיתוף פעולה.
ביטחון עצמי: הצלחה בפרויקט מגבירה את הביטחון העצמי של הילדים ומעודדת אותם לקחת על עצמם אתגרים נוספים.
דוגמה לפרויקט מוצלח
אחת הדוגמאות לפרויקט מוצלח היא בניית אתר אישי. הילדים לומדים את יסודות ה-HTML וה-CSS, מתכננים את מבנה האתר, בוחרים צבעים ותמונות ומוסיפים תוכן אישי. בסיום הפרויקט יש להם אתר שפועל ומוצג באינטרנט, מה שמעניק להם תחושת גאווה והישג.
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="details container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>צור משחק אינטרנטי מגניב</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">הרשם עכשיו</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>צור אתר אינטרנטי כדי להזמין את החברים שלך ליום הולדת</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">הרשם עכשיו</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>צור בלוג אישי שבו תוכל לפרסם את החדשות שהכי מענינות אותך</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">הרשם עכשיו</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header */}
      <div className="second_header">
        <div>
          <img src={second_header} alt="" />
        </div>
        <div className="Overlay"></div>
      </div>

      {/* Details */}
      <div className="details container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>צור אתר לפירסום השיעורי בית שלך</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">הרשם עכשיו</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>צור מחשבון אינטרנטי</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">הרשם עכשיו</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
              <div className="box_content">
                <h6>צור אתר לוח זמנים</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio earum labore consequatur quia aliquam nemo.
                </p>
                <button className="btn">הרשם עכשיו</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
