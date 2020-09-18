import React from "react";
import "../styles/rules.css";

export default function Rules() {
  return (
    <div>
      <h2>Regler</h2>
      <p>
        Se till att läsa reglerna noggrant och fråga någon i staff på Discord
        eller på servern om något är otydligt.
      </p>
      <h3>Server-regler</h3>
      <ul className="server-rules" id="server">
        <ol>
          <li>Håll en trevlig ton</li>
          <ol type="a">
            <li>Skriv inte i bara stora bokstäver (CAPS LOCK)</li>
            <li>
              Skriv inte nedlåtande till varandra(varken i privata eller
              offentliga chatter på servern).
            </li>
            <li>Ingen spam eller reklam till andra servrar.</li>
            <li>
              Inget tiggeri, men självklart är byteshandel eller gåvor okej.
            </li>
            <li>
              Homofobiska eller rasistiska kommentarer i chatt eller i spelet är
              inte okej. Politik är onödigt att prata om i chatten.
            </li>
          </ol>
          <br />
          <li>Griefing är totalförbjudet</li>
          <ol type="a">
            <li>Förstör inte andras byggen</li>
            <li>Bygg inte för nära andra utan tillåtelse</li>
            <li>Ta inte från andras farmer utan att plantera om efter dig.</li>
            <li>
              Plantera om efter dig om du tar från villagerfarmer, eller
              netherwart i netherfort (andra vill också kunna nyttja farmer)
            </li>
            <li>
              Lämna fint efter dig i naturen, lämna inte stora dirt-pelare i
              naturen, hugg ner hela träd efter dig.
            </li>
          </ol>
          <br />
          <li>
            Hack-klienter, x-ray och missbrukning av buggar i spelet är
            förbjudet. Inkluderar duplicering av items, zero ticks-farmer och
            autoclickers.
          </li>
          <br />
          <li>
            Be inte staff om teleport eller återställning av items vid död. Vi
            har inte tillgång till en lista över vilka items du hade innan du
            dog och inga koordinater heller.
          </li>
          <br />
          <li>
            Att kringgå anti-afk-kicken är inte okej. Det leder till att man får
            trollmynt utan aktiv speltid.
          </li>
          <br />
          <li>
            Att göra fällor för att döda andra spelare är inte okej. Om du vill
            PvP:a kan du göra det i PvP-området i spawn.
          </li>
          <br />
          <li>
            Större farmer med många djur eller monster drar ner
            serverprestandan, ha bara så många djur eller monster som du
            behöver(max 250) per område.
          </li>
          <br />
          <li>
            Om det inte är tydligt vad du säljer i din shop så måste du ha en
            ytterligare förklarande skylt som förklarar vad du säljer.
          </li>
          <br />
          <li>
            Samtliga redstone-klockor ska gå att stänga av och ska vara av när
            du är offline.
          </li>
          <br />
          <li>
            Att använda flera konton på servern är inte okej, det ger ett
            oschysst övertag på servern.
          </li>
          <br />
          <li>
            Tillsvidare är det inte okej att göra farmer för pillagers/illagers.
          </li>
          <br />
          <li>
            Om man har en speciell taxa för sin stad måste man förmedla tydligt
            vad den taxan innebär för alla medborgare.
          </li>
        </ol>
      </ul>

      <h3>Discord-regler</h3>
      <ul className="server-rules" id="discord">
        <ol>
          <li>Håll en trevlig ton</li>
          <li>Ingen voice-changer</li>
          <li>Inget spam</li>
          <li>Ingen reklam</li>
        </ol>
      </ul>
    </div>
  );
}
