import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  listRequest: null,
  listSuccess: ['candidates'],
  listFailure: null
})

export const DatabaseTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  candidates: ["01","04","100","101","1014","102","103","104","105","106","107","108","1084","108区间","109","11","110","111","112","112区间","113","115","116B","117","118","120","1201","1202","1203","1204","1204B","1205","1206","1207","1208","1209","121","1210","1212","1216","1217","1218","1219","122","1220","1221","1222","1223","1226","1227","1228","1229","123","1231","1238","123区间","124","1250","1251","129","13","131","132","133","134","135","136","137","138","139","14","140","141","142","143","143区间","144","145","146","147","149","15","150","151","152","155","157","158","159","160","1600","1601","1602","1603","1604","1605","1606","1607","1608","1609","1610","1611","1612","162","165","1650","1651","166","168","17","171","1711","1712","172","1721","173","1731","176","178","178大站车","179","18","180","184","185","187","189","189区间","19","190","192","193","195","197","198","20","205","206","21","210","216","218","22","220","222","224","23","24","25","252","253","257","26","28","301","302","303","304","305","306","307","308","309","310","311","312","315","316","317","318","319","320","321","322","323","324","325","326","327","328","329","33","330","332","340","341","342","36","37","40","405","406","41","42","43","44","45","46","46区间","47","48","49","50","502","508","50区间","51","510","519","52","522","527","528","537","538","54","547","548","55","551","552","554","559","56","561","56区间","57","577","58","59","597","6","60","607","609","61","615","62","624","627","628","629","63","630","632","64","65","66","66区间","67","68","69","70","700","701","702","703","703B","704","704B","705","707","708","709","71","711","712","713","714","715","716","717","718","719","71区间","72","720","721","722","723","724","725","726","727","728","729","730","731","732","733","734","735","736","737","738","739","74","740","741","742","743","744","745","746","747","748","749","750","751","753","754","755","757","758","759","76","760","761","762","763","764","765","766","767","768","770","776","78","79","8","80","803","804","805","807","808","809","810","811","812","813","817","818","819","820","821","823","824","825","826","827","828","829","830","831","832","833","834","836","837","838","839","841","842","845","846","849","850","853","854","855","856","858","859","862","864","866","867","868","869","87","870","874","875","876","877","878","879","88","89","90","909","91","911","912","92","920","923","926","927","929","92B","93","930","931","932","933","934","937","939","94","941","941跨线定班","942","944","946","947","948","95","950","951","952","952B","958","959","96","960","962","963","966","97","973","974","975","98","99","宝山10路","宝山11路","宝山12路","宝山13路","宝山14路","宝山15路","宝山16路","宝山17路","宝山18路","宝山19路","宝山1路","宝山20路","宝山21路","宝山22路","宝山23路","宝山25路","宝山27路","宝山28路","宝山29路","宝山2路","宝山30路","宝山31路","宝山35路","宝山36路","宝山3路","宝山4路","宝山5路","宝山6路","宝山7路","宝山81路","宝山82路","宝山83路","宝山84路","宝山85路","宝山86路","宝山87路","宝山88路","宝山89路","宝山8路","宝山90路","宝山91路","宝山92路","宝山93路","宝山95路","宝山9路","堡陈北线","堡陈中线","堡陈专线","堡红线","堡进线","堡七线","堡胜专线","堡四线","北安跨线","北安线","漕泾一路","倡导文明乘车","陈凤线","陈前线","城桥1路","城桥2路","崇明东滩1路","崇明东滩2路","崇明乡村10路","崇明乡村11路","崇明乡村1路","崇明乡村3路","崇明乡村4路","崇明乡村5路","崇明乡村6路","崇明乡村7路","崇明乡村8路","崇明乡村9路","打造精品公交","大桥三线","大桥一线","枫泾七路","枫梅线","枫戚快线","奉卫线","高川专线","古美环线","合庆2路","横沙2路","横沙3路","横长线","虹桥枢纽1路","虹桥枢纽4路","虹桥枢纽7路","沪松专线","沪唐专线","江川3路","金漕线","金枫线","金山1路","金山2路","金山3路","金山4路","金山5路","金山6路","金山7路","金山8路","金山9路","金山9路区间","金山工业区二路","金山工业区一路","金山卫二路","金山卫一路","金石线","金张卫支线","陆安高速","陆安高速B","罗泾班线","闵东线","闵马线","闵吴线","闵行16路","闵行1路","闵行22路","闵行28路","闵行29路","闵行30路","闵行33路","闵行36路","南堡二线","南堡支线","南堡专线","南东专线","南风线","南海二线","南海线","南红专线","南建专线","南江专线","南金线","南隆专线","南牛线","南同专线","南卫线","南新专线","南裕专线","南跃线","浦东11路","浦东13路","浦东14路","浦东15路","浦东17路","浦卫线","浦卫专线","浦西滨江1路","青枫专线","山阳二路","山阳二路工业区","山阳一路","山阳一路区间","上川专线","上嘉线","上佘定班线","上石线","申崇二线","申崇二线区间","申崇六线","申崇六线B","申崇三线","申崇三线区间","申崇四线","申崇四线区间","申崇五线","申崇五线班车","申崇一线","申川专线","申方专线","莘车线","莘金专线","莘庄1路","莘庄2路","莘庄3路","石漕线","石胡专线","石化三线","石化一线","石梅线","石南专线","石青专线","树立标杆线路","松江12路","松闵线","松亭石专线","松卫线","松卫专线","松新枫线","隧道八线","隧道二线","隧道夜宵一线","孙桥1路","塘南专线","塘卫线","亭林三路","外高桥2路","万周专线","新泾1路","徐川专线","徐闵线","徐闵夜宵专线","张堰二路","张堰一路","长南线","长兴1路","长兴2路","长兴3路","长兴4路","长征1路","朱泾五路","朱泾五路区间","朱钱卫线","朱松线","朱卫线","朱卫专线"],
  error: null
})

/* ------------- Selectors ------------- */

export const DatabaseSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ error: null, fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { candidates } = action
  return state.merge({ error: null, fetching: false, candidates })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ error: true, fetching: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_REQUEST]: request,
  [Types.LIST_SUCCESS]: success,
  [Types.LIST_FAILURE]: failure
})
