import Ackbar from "../img/Ackbar.jpg"
import AdiGallia from "../img/AdiGallia.jpg"
import Anakin from "../img/AnakinSkywalker.jpg"
import Arvel from "../img/ArvelCrynyd.jpg"
import Ayla from "../img/AylaSecura.jpg"
import Bail from "../img/BailPrestorOrgana.jpg"
import Barriss from "../img/BarrissOffee.jpg"
import BenQuadinaros from "../img/BenQuadinaros.jpg"
import Beru from "../img/BeruWhitesunlars.jpg"
import BibFortuna from "../img/BibFortuna.jpg"
import Biggs from "../img/BiggsDarklighter.jpg"
import Boba from "../img/BobaFett.jpg"
import Bossk from "../img/Bossk.jpg"
import C3PO from "../img/C3PO.jpg"
import Chewbacca from "../img/Chewbacca.jpg"
import Cliegg from "../img/ClieggLars.jpg"
import Corde from "../img/Cordé.jpg"
import Maul from "../img/DarthMaul.jpg"
import Vader from "../img/DarthVader.jpg"
import Dexter from "../img/DexterJettster.jpg"
import Dooku from "../img/Dooku.jpg"
import Dorme from "../img/Dormé.jpg"
import DudBolt from "../img/DudBolt.jpg"
import Eeth from "../img/EethKoth.jpg"
import Finis from "../img/FinisValorum.jpg"
import Gasgano from "../img/Gasgano.jpg"
import Greedo from "../img/Greedo.jpg"
import Gregar from "../img/GregarTypho.jpg"
import Grievous from "../img/Grievous.jpg"
import Han from "../img/HanSolo.jpg"
import IG88 from "../img/IG88.jpg"
import Jabba from "../img/JabbaDesilijicTiure.jpg"
import Jango from "../img/JangoFett.jpg"
import JarJar from "../img/JarJarBinks.jpg"
import JekTono from "../img/JekTonoPorkins.jpg"
import Jocasta from "../img/JocastaNu.jpg"
import KiAdi from "../img/KiAdiMundi.jpg"
import KitFisto from "../img/KitFisto.jpg"
import Lama from "../img/LamaSu.jpg"
import Lando from "../img/LandoCalrissian.jpg"
import Leia from "../img/LeiaOrgana.jpg"
import Lobot from "../img/Lobot.jpg"
import Luke from "../img/LukeSkywalker.jpg"
import Luminara from "../img/LuminaraUnduli.jpg"
import Mace from "../img/MaceWindu.jpg"
import MasAmedda from "../img/MasAmedda.jpg"
import MonMothma from "../img/MonMothma.jpg"
import Nien from "../img/NienNunb.jpg"
import Nute from "../img/NuteGunray.jpg"
import ObiWan from "../img/ObiWanKenobi.jpg"
import Owen from "../img/OwenLars.jpg"
import Padme from "../img/PadméAmidala.jpg"
import Palpatine from "../img/Palpatine.jpg"
import PloKoon from "../img/PloKoon.jpg"
import Poggle from "../img/PoggletheLesser.jpg"
import Quarsh from "../img/QuarshPanaka.jpg"
import QuiGon from "../img/QuiGonJinn.jpg"
import R2D2 from "../img/R2D2.jpg"
import R4P17 from "../img/R4P17.jpg"
import R5D4 from "../img/R5D4.jpg"
import Ratts from "../img/RattsTyerel.jpg"
import Raymus from "../img/RaymusAntilles.jpg"
import RicOlie from "../img/RicOlié.jpg"
import Roos from "../img/RoosTarpals.jpg"
import Rugor from "../img/RugorNass.jpg"
import Saesee from "../img/SaeseeTiin.jpg"
import SanHill from "../img/SanHill.jpg"
import Sebulba from "../img/Sebulba.jpg"
import Shaak from "../img/ShaakTi.jpg"
import Shmi from "../img/ShmiSkywalker.jpg"
import SlyMoore from "../img/SlyMoore.jpg"
import Tarfful from "../img/Tarfful.jpg"
import Taun from "../img/TaunWe.jpg"
import Tion from "../img/TionMedon.jpg"
import WatTambor from "../img/WatTambor.jpg"
import Watto from "../img/Watto.jpg"
import Wedge from "../img/WedgeAntilles.jpg"
import Wicket from "../img/WicketSystriWarrick.jpg"
import Wilhuff from "../img/WilhuffTarkin.jpg"
import Yarael from "../img/YaraelPoof.jpg"
import Yoda from "../img/Yoda.jpg"
import ZamWesell from "../img/ZamWesell.jpg"

const charactersDictionary = {
  LukeSkywalker: Luke,
  HanSolo: Han,
  AnakinSkywalker: Anakin,
  DarthMaul: Maul,
  DarthVader: Vader,
  LeiaOrgana: Leia,
  Chewbacca,
  Ackbar,
  AdiGallia: AdiGallia,
  ArvelCrynyd: Arvel,
  AylaSecura: Ayla,
  BailPrestorOrgana: Bail,
  BarrissOffee: Barriss,
  BenQuadinaros: BenQuadinaros,
  BeruWhitesunlars: Beru,
  BibFortuna: BibFortuna,
  BiggsDarklighter: Biggs,
  BobaFett: Boba,
  Bossk,
  C3PO,
  ClieggLars: Cliegg,
  Cordé: Corde,
  DexterJettster: Dexter,
  Dooku,
  Dormé: Dorme,
  DudBolt: DudBolt,
  EethKoth: Eeth,
  FinisValorum: Finis,
  Gasgano: Gasgano,
  Greedo: Greedo,
  GregarTypho: Gregar,
  Grievous: Grievous,
  IG88,
  JabbaDesilijicTiure: Jabba,
  JangoFett: Jango,
  JarJarBinks: JarJar,
  JekTonoPorkins: JekTono,
  JocastaNu: Jocasta,
  KiAdiMundi: KiAdi,
  KitFisto: KitFisto,
  LamaSu: Lama,
  LandoCalrissian: Lando,
  Lobot,
  LuminaraUnduli: Luminara,
  MaceWindu: Mace,
  MasAmedda: MasAmedda,
  MonMothma: MonMothma,
  NienNunb: Nien,
  NuteGunray: Nute,
  ObiWanKenobi: ObiWan,
  OwenLars: Owen,
  PadméAmidala: Padme,
  Palpatine: Palpatine,
  PloKoon: PloKoon,
  PoggletheLesser: Poggle,
  QuarshPanaka: Quarsh,
  QuiGonJinn: QuiGon,
  R2D2,
  R4P17,
  R5D4,
  RattsTyerel: Ratts,
  RaymusAntilles: Raymus,
  RicOlié: RicOlie,
  RoosTarpals: Roos,
  RugorNass: Rugor,
  RugorNass: Rugor,
  SaeseeTiin: Saesee,
  SanHill: SanHill,
  Sebulba: Sebulba,
  ShaakTi: Shaak,
  ShmiSkywalker: Shmi,
  SlyMoore: SlyMoore,
  Tarfful: Tarfful,
  TaunWe: Taun,
  TionMedon: Tion,
  WatTambor: WatTambor,
  Watto: Watto,
  WedgeAntilles: Wedge,
  WicketSystriWarrick: Wicket,
  WilhuffTarkin: Wilhuff,
  YaraelPoof: Yarael,
  Yoda,
  ZamWesell: ZamWesell
}

const Characters = ({characters, charactersImg}) => {

  return (
      <div>
          <img 
          className="block mx-auto my-5" 
          src={charactersDictionary[charactersImg]} 
          alt={charactersDictionary[characters]} 
          />
          <h1 className=' text-white text-2xl text-center mb-5 font-bold'>{characters.name}</h1>
          {characters.name ? <p className=' text-white text-xl text-center mb-5'>
            Nacio en el año: {characters.birth_year}</p> : null}
          {characters.name ? <p className=' text-white text-xl text-center mb-5'>
            Tiene una altura de: {characters.height}cm y pesa: {characters.mass}kg</p> : null}
      </div>
  )
}

export default Characters;
