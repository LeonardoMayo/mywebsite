<template>
    <v-card flat class="px-10 pb-2 mx-auto" style="max-width: 1000px">

        <SmallHeader
            text="Meine Bachelorthesis - Interaktionsdesign in kollaborativen Augmented Reality Umgebungen"
        />

        <!-- Title Row -->
        <v-row class="my-4">
            <v-col>
                <h2>Interaktionsdesign in kollaborativen Augmented Reality Umgebungen - Ein Anwendungsbeispiel</h2>
            </v-col>
        </v-row>
        <v-divider/>

        <!-- Content -->
        <div>
            //Screenshot <br/>
            <p>Ich war schon immer begeistert von Augmented Reality Technologie. Sie erinnert an Iron Man’s HUD,
                an die Sicht des Terminators oder an das Brettspiel an Bord des Millenium Falken. Heutige Möglichkeiten reichen
                in den meisten Fällen noch nicht an diese Level heran, aber kommen wir mit Smartphones und Smart
                Glasses schon sehr weit. Smartphones sind dabei das Nächste was Rechenleistung, Vielseitigkeit und
                Verfügbarkeit betrifft. Da ich dieses Aufgabenfeld verdammt spannend finde, habe ich mich damals
                entschlossen, meine Bachelorthesis dazu zu schreiben. Dieser Artikel stellt das Produkt
                dieser Thesis vor.</p>

            <p>Der Titel der Thesis lautet ‘Interaktionsdesign in kollaborativen Augmented Reality Umgebungen‘.
                Dabei war die Aufgabe, ein Anwendungsbeispiel für ein Interaktionsdesign einer Augmented
                Reality Anwendung zu finden, welches möglichst viele Aspekte des Augmented Reality Fokus ausnutzt.
                Da das Ganze im Schwerpunkt ‘Games Engineering‘ geschrieben wurde, wurde ein Multiplayer Mobile
                Game als Anwendungsbeispiel gewählt.</p>

            <h3>Grundlagen</h3>
            <p>In diesem Artikel wird oft über Augmented Reality gesprochen, sowie andere technische Begriffe.
                Augmented Reality ist ein Begriff der Technologien beschreibt, die unsere erlebbare Realität
                mit zusätzlichen Informationen anreichern. Dies kann alle Sinne eines Menschen ansprechen,
                in diesem Fall beschränkt sich das Projekt aber auf die visuelle Wahrnehmung. <br/>
                Zuerst wurden Interaktionstypen mit dem Endgerät identifiziert, dazu zählen die Interaktion
                in der echten Welt (über z.B. Fingertracking), die Interaktion über den Touchscreen (wie
                bei einem normalen Mobile Game) und auch die Interaktion des Smartphones mit der Umgebung.
                Diese Art der Interaktion erfordert eine Erklärung, da der Begriff kaum standardisiert ist.
                Wenn man die Interaktion im Spiel an Handlungen knüpft, die man außerhalb des Spiels macht,
                kreiert das ein anderes Erlebnis, als wenn man direkt auf den Bildschirm drückt. Dazu kann man
                viel nutzen, in dem Fall dieses Anwendungsbeispiels wurde die Bewegung des Smartphones genutzt.
                Der Spieler konnte mit seinem Smartphone dahin zielen wo die Spielfigur hingehen sollte.</p>

            <h3>Spielprinzip</h3>
            <p>Wenn jetzt schon Spielfiguren ins Gespräch kommen, sollte zunächst das Spielprinzip geklärt
                werden. Die Basis bildet, wie erwähnt, ein Multiplayer Mobile Game. Darauf aufbauend wurde
                folgendes Spielprinzip festgelegt: Zwei Spieler spawnen als Würfel auf einer Plattform.
                Irgendwo um diese Plattform spawnt ein Stern, der das Ziel darstellt. Um dieses Ziel zu
                erreichen können Spieler verschiedene Arten von Blöcken an bestehende Objekte oder
                schon gebaute Blöcke platzieren. Wer das Ziel als Erstes erreicht gewinnt. Dabei
                haben die Spieler die Möglichkeit gegeneinander zu spielen, oder kollaborativ einen
                Weg zum Ziel zu finden. Aktuell wird nur der kompetitive Weg belohnt, allerdings ist
                noch geplant, dies für die Zukunft zu ändern. Einen genaueren Überblick erhält
                man in diesem Feature-Überblick Video:</p>
            <div style="width: 100%">
                <iframe class="youtubeLink mx-auto" src="https://www.youtube.com/embed/a-3SIwIyN9Q"/>
            </div>

            <h3>Technische Umsetzung</h3>
            <p>Die technische Umsetzung der Aufgabe war natürlich der Hauptteil der Thesis. Grundsätzlich
                wird die Anwendung mit der Unity Engine in C# erstellt. Unity ist eine kostenlose 3D-Engine
                die im Gaming und Simulationsbereich Anwendung findet und sehr erweiterungsfreudig ist. Als
                Augmented Reality Framework wurde, nach einem kurzen Vergleich mit der Konkurrenz, Google’s
                ARCore ausgewählt. Es bietet guten Communitysupport, eine klare Struktur und Cloud Anchors,
                AR-Ankerpunkte, die man über die Cloud an die Leute in der eigenen Sitzung weitergeben kann. <br/>
                Um mit einem Freund spielen zu können muss man sich mit diesem erstmal verbinden können.
                Dafür wurde hier die Unity Networking HL API genutzt. Sie bietet die Möglichkeit schnell
                Räume zu erstellen und kann schnell und kostengünstig über Unity’s Services zugeschaltet
                werden. Dazu ist sie auch noch recht offen, was es erleichtert eigene Spiellogik zu implementieren.
                Um dabei zu verhindern das man dedizierte Server aufsetzen muss kann man über die Networking API
                auch eine direkte Verbindung zwischen den Spielern aufbauen. Dabei ist das nicht streng genommen
                P2P, da einer der Spieler als Server und der andere als Client agiert. Was hierbei aus der Doku
                der Networking API aber nicht direkt hervorging ist das der Server auch direkten Zugriff auf
                alle Spielobjekte hat und jegliche Änderungen auch an alle Spieler übertragen werden. Zum
                jetzigen Zeitpunkt ist die API allerdings schon veraltet, in einem kommenden Update wird
                die Anwendung auf eine Alternative umgebaut.</p>

            <h3>Aufbau des Projekts</h3>
            <p>Der technische Aufbau des Projekts lässt sich in 5 Bereiche einteilen, die eng zusammenarbeiten.
                Der Großteil dieser Zusammenarbeit wird über den GameManager koordiniert, ein Singleton der
                Referenzen auf viele Komponenten Manager hat. <br/>
                Diese 5 Komponenten sind die Shared Augmented Reality, dem Networking, User Interface, dem Bausystem
                der Spielwelt und zuletzt der Spiellogik. <br/>
                Shared Augmented Reality beinhaltet die Grundkonstruktion für die AR Funktionen. Dabei ist der
                Aufbau der Unity Szene durch ARCore vorgegeben, und liegt vor allem in einem ‘ARCore Device‘
                GameObject. Wichtig ist hier aber das Config-File CloudAnchorsSessionConfig, welches den Key
                und die Einstellungen für die Verbindung zum Cloud Anchors Service bereithält. Wann genau der
                Cloud Anchor gespawnt wird ist aber abhängig von der Spiellogik, dafür wurde ein Custom Skript
                geschrieben. Cloud Anchor funktionieren so das die Umgebung und dessen besondere Merkmale
                miterfasst werden und die resultierende Point Cloud über die Google Services gespeichert wird.
                Das heißt das Spieler nebeneinander stehen und die gleiche Umgebung sehen müssen. <br/>
                Über das Networking wurde schon ein bisschen gesprochen, aber dennoch ist es ein wichtiger Bestandteil
                dieses Parts. Grundsätzlich funktioniert das Multiplayer Prinzip in der Anwendung über eine
                Raumliste. Wenn ein Spieler einen neuen Raum öffnet, wird er zum Server und sein Raum taucht in der
                Liste auf. Da ein Spieler als Server agiert und einer als Client müssen die Funktionen für
                die Synchronisierung der Spielelemente darauf Rücksicht nehmen, da diese Aktionen über den
                Server synchronisiert werden müssen. <br/>
                Das User Interface sollte so viel wie möglich vom Spielgeschehen zeigen, dabei aber alle nötigen
                Möglichkeiten bieten. Da die Bewegung und das Zielen über den Spieler und seiner Blickrichtung
                in der echten Welt gesteuert werden, braucht die Anwendung nur noch zwei Trigger, um zwischen
                Bewegung und Bauen zu wechseln. Diese sind auf Daumenhöhe angebracht, da die Anwendung auf den
                Landscape Modus ausgerichtet ist. Zusätzlich lässt sich links ein Menü aufklappen,
                über das man den gewünschten Baublock auswählen kann. <br/>
                // Screenshot<br/>
                Wenn jetzt schon das Bauen ins Gespräch kam, sollte man es vielleicht genauer erklären. Das Bauen
                ist essentiell, da es die einzige Möglichkeit darstellt, das Ziel zu erreichen und das Spiel
                zu gewinnen. Dafür interagieren über den Cursor mit der Spielwelt, und können an bestimmte
                Seiten von gebauten Objekten und der Startplattform weitere Objekte anbauen. Die Objekte
                sind aktuell ein normaler Würfel, eine Rampe, eine lange Gerade und ein Aufzug, der an die
                grünen Röhren aus Super Mario erinnern soll. <br/>
                Zu guter Letzt muss noch das Spielprinzip selbst erwähnt werden. Wie bereits erwähnt spielen
                zwei Spieler auf einem Level und versuchen das Ziel zu erreichen. Das Ziel wird durch einen
                Stern dargestellt, der zufällig um die Startplattform herum spawnt. Gleichzeitig läuft aber
                noch ein Timer herunter, was bedeutet das jeder der bis zum Ende des Timers das Ziel nicht erreicht
                verliert. Die Spieler können auch miteinander kollidieren, und sich zum Beispiel von der
                Spielwelt schieben. Das bedeutet dann zwar nicht das man verloren hat, aber das man wieder
                auf der Startplattform auftaucht. All das zusammen und die Tatsche das mit einem Spieler praktisch
                umeinander herum rennen muss um sich zu bewegen bringen ein neues Feeling in die mobile Spielewelt.</p>
            <h3>Entstandene Probleme</h3>
            <p>Das Problem mit der Doku der Networking API wurde schon angesprochen, aber es lohnt sich dies
                auszuführen. Denn ARCore und dessen Cloud Anchors nutzen die spieleigene Netzwerkstruktur, um
                Nachrichten zu übertragen wie z.B. die Cloud Anchor Keys. Das Spawnen der Spielfiguren hat damit
                aber am meisten Probleme bereitet, weil der Server wie schon erwähnt bei einem der Spieler läuft.
                Teils wurde nur die Spielfigur des ersten Spielers übertragen, mal wurde eine Spielfigur doppelt
                angezeigt, oder die Position derselben Spielfigur war bei zwei Spielern unterschiedlich, alles
                abhängig von verschiedenen Einstellungen zum Spawnen. Der Höhepunkt war als einmal die Spielfigur
                des zweiten Spielers beim ersten Spieler richtig angezeigt wurde, aber beim zweiten Spieler, wo
                sie eigentlich gespawnt wurde, war sie an einer falschen Position. Die Orientierung von gebauten
                GameObjects in der echten Welt war auch noch spannend. Dabei wird nicht beachtet, wohin der Spieler
                mit dem Smartphone während dem Spiel guckt, sondern ausschlaggebend ist dabei wohin der Spieler
                sich beim Spawnen der Spieler orientiert.</p>

            <p>Ich hoffe dieser Artikel konnte Ihnen einen kleinen Überblick in das Projekt meiner Bachelorthesis
                bieten. Darin steckt viel Herzblut, und einige Ideen habe ich auch noch im Hinterkopf. Falls Fragen oder
                Anregungen bestehen, melden Sie sich gerne!
            <p>Damit wünsche ich noch einen schönen Morgen, Nachmittag oder Abend. Jan </p>
            <p>Und hier noch das Video meiner Präsentation zum Midpoint der Thesis, wo ich nochmal genauer auf die
                einzelnen Bausteine der Anwendung eingehe: </p>
            <div style="width: 100%">
                <iframe class="youtubeLink mx-auto" src="https://www.youtube.com/embed/2jNScS24QDk"/>
            </div>
            <br/>
            <a href="https://play.google.com" style="color: black">Play Store Link</a>

        </div>
    </v-card>
</template>

<script>
import logoBunt from '@/assets/Bilder/jpl-f02-01.png';
import SmallHeader from "@/components/SmallHeader";

export default {
    name: 'KickoffThesisApp',
    components: {SmallHeader},
    data: () => ({
       logoBunt,
    }),
}
</script>

<style scoped lang="scss">
.youtubeLink {
    width: 80%;
    border: none;
    height: 400px;
}

h3 {
    margin-top: 1.5em;
    margin-bottom: 1em;
}

p {
    color: #555555;
    padding-inline: 1em;
}
</style>