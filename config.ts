import path from "path";

const __dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname));

export const ARCGIS_URL = 'https://geodata-jmkgis.opendata.arcgis.com/data.json';
export const ARCGIS_FILE = path.resolve(__dirname, 'data/arcgis.json');

export const DTO_FILE = path.resolve(__dirname, 'data/dto.json');

export const LKOD_URL = process.env.URL || process.env.VERCEL_URL || 'https://open.datakhk.cz';
export const LKOD_DIR = path.resolve(__dirname, 'public');
export const LKOD_FILE = path.resolve(__dirname, 'public/katalog.jsonld');

export const META_LKOD = {
	name_cz: "Katalog otevřených dat Jihomoravského kraje",
	description_cz: "Katalog otevřených dat Jihomoravského kraje. Obsahuje veřejně dostupné geografické datové sady publikované prostřednictvím ArcGIS Hub.",
	provider: "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/70888337",
	homepage: "https://geodata-jmkgis.opendata.arcgis.com",
	contact_type: 'Organizace',
	contact_name: 'Krajský úřad Jihomoravského kraje / Odbor informatiky',
	contact_email: 'data@kr-jihomoravsky.cz',
	themes: {
		'Kraj a dotace': ['REGI', 'GOVE'],
		'Investice kraje': ['GOVE', 'ECON'],
		'Lidé a sociální služby': ['SOCI'],
		'Zdravotnictví a zdraví': ['HEAL'],
		'IZS a bezpečnost': ['JUST'],
		'Veřejná doprava a silnice': ['TRAN'],
		'Ekonomika a trh práce': ['ECON'],
		'Školství a výzkum': ['EDUC', 'TECH'],
		'Kultura a cestovní ruch': ['EDUC'],
		'Životní prostředí': ['ENVI'],
		'_fallback': ['OP_DATPRO'],
	} as Record<string, string[]>,
	periodicity: {
		'000': 'UNKNOWN',
		'001': 'CONT',
		'002': 'DAILY',
		'003': 'WEEKLY',
		'004': 'BIWEEKLY',
		'005': 'MONTHLY',
		'006': 'QUARTERLY',
		'007': 'BIENNIAL',
		'008': 'ANNUAL',
		'009': 'OTHER',
		'010': 'IRREG',
		'011': 'NEVER',
		'012': 'UNKNOWN',
	} as Record<string, string>,
	excludedDatasets: []
}
