import React, { useState, useEffect } from "react";
import "../styles/home.css";
import StaffList from "../../../components/staff-list/scripts/staff-list";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
import Snackbar from "../../../components/snackbar/scripts/snackbar.jsx";
export default function HomePage() {
  const [showSnackySnack, setShowSnackySnack] = useState(true);
  const [imageList, setImageList] = useState([]);
  const [currentImageId, setCurrentImageId] = useState(null);
  useEffect(() => {
    changeImageList(
      shuffle([
        "jumbotron-bg-anim1",
        "jumbotron-bg-anim3",
        "jumbotron-bg-anim4",
        "jumbotron-bg-anim5",
        "jumbotron-bg-anim6",
        "jumbotron-bg-anim7",
        "jumbotron-bg-anim8",
        "jumbotron-bg-anim9",
        "jumbotron-bg-anim10",
        "jumbotron-bg-anim11",
        "jumbotron-bg-anim12"
      ])
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(changeImageId, 4500);
    return () => clearInterval(interval);
  });

  const changeImageList = list => {
    setImageList(list);
  };

  const changeImageId = () => {
    if (imageList.length - 1 === currentImageId) setCurrentImageId(0);
    else setCurrentImageId(currentImageId + 1);
  };

  const shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  return (
    <div>
      <Jumbotron
        className={`${imageList[currentImageId] ||
          "jumbotron-bg-anim1"} jumbotron-animate`}
        title="Trollskogen - Svensk minecraft server 1.16.2"
        text="Kul att du kikar in! Trollskogen är ett svenskt moget
    minecraft-community som startades i februari 2019."
        linkArea={
          <React.Fragment>
            <span>Ip: mc.trollskogen.nu</span>
          </React.Fragment>
        }
      />
      <div className="post-area">
        <div className="post post-left">
          <hr />
          <h2 className="post-title">Viktig info från Trollskogen staff</h2>
          <p>
            När vi började med trollskogen under januari 2019 så hade vi flera
            mål, vi ville vara en ärlig, mognare server som var lite svårare och
            vi ville vi ville inte radera världen var och varannan månad som
            vissa servrar servrar kan göra. Idag, nästan 2 år sen starten så har
            vi kommit till ett läge där ett av våra misstag som vi gjorde när vi
            med Trollskogen, att vi började med en för stor värld, börjat sätta
            spår.
            <br /> <br />
            Buggar som vi har sett nu de senaste veckorna med att portaler inte
            fungerar och att vissa spelare har förlorat sina trollmynt beror på
            att vi för några veckor sedan fick slut på hårddiskutrymme på
            servern och därför blev vissa delar av världen och vissa plugins
            filer korrupta. På grund av världens storlek så tror vi inte kan
            fortsätta utöka kartan så mycket mer under kommande kommande
            kommande uppdateringar, och och att ha plugin som dynmap är tyvärr
            omöjligt idag.
            <br /> <br />
            Vi i staff har gemensamt beslutat att vi kommer vara tvungna att
            nollställa kartan för att framtidssäkra Trollskogen. Vi planerar att
            nollställa världen den 28:e november. Med den nya världen så kommer
            vi att börja från noll, ekonomin, inventories och mcmmostats kommer
            att nollställas, men självklart kommer alla ranker att vara kvar.
            Vissa plugins har vi också valt att ta bort som inte används i lika
            stor utsträckning längre, chesthops och att hyra område i spawn
            kommer inte att vara möjligt längre. På sikt kommer vi också att ta
            bort time is money och ersätta det med vårt nya egna plugin Quests.
            <br /> <br />
            Vi i staff är fullt förstående i att det är tråkigt att gamla byggen
            försvinner, där så många minnen har skapats. Men nu ser vi fram emot
            en ny mapp, där nya häftiga byggen kan byggas och nya minnen kan
            skapas! <br />
            <br />
            //Trollskogen staff
          </p>
        </div>
        <div className="post post-right post-staff-area">
          <hr />
          <h2>Vi i staff</h2>
          <StaffList />
        </div>
      </div>
      <div className="post-area">
        <br />
        <div className="post post-left">
          <hr />
          <h2 className="post-title">Om oss</h2>
          <p className="post-text">
            Trollskogen är en vänskaplig towny-server utan whitelist. Vi kör med
            ett gäng plugin för att skapa en bättre speluplevelse, bl.a.{" "}
            <b>Lwc</b>, <b>towny</b> och <b>chestshops</b>. På trollskogen har
            vi nolltollerans mot griefing, fusk och trakasserier och vi är hårda
            med att alla ska följa de regler vi har satt upp.
            <br />
            <br />
            På trollskogen kör vi på en svårare svårighetsgrad(hard) och man får
            inga gratis-saker, allt för att göra minecraft lite mer utmanande!
            <br /> <br />
            Självklart trivs du som gillar lugn och ro och bara vill bygga i
            fred också! Då kan du gå med i en av våra towny städer, eller skapa
            en själv, i dessa kan man stänga av monster.
          </p>
        </div>
      </div>
      {/** WIP <Snackbar
        isOpen={showSnackySnack}
        onAccept={() => {
          setShowSnackySnack(false);
        }}
      >
        Accepterar du våra kakor?
      </Snackbar>*/}
    </div>
  );
}
