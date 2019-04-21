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
      <ul className="server-rules">
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
            förbjudet.
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
          <li>
            Större farmer med många drar ner serverprestandan, ha bara så många
            djur eller monster som du behöver(max 250).
          </li>
        </ol>
      </ul>
    </div>
  );
}
