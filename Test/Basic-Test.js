import { Selector, t } from "testcafe";

const cookiebutton = Selector("#_evidon-banner-acceptbutton")

const FindAddress = Selector('a').withText("Find address")
const own = Selector ("#PropertyDetailsViewModel_HomePolicyholderIsHomeownerId_1")
const cover = Selector("#PropertyDetailsViewModel_SelectedPackage_9")
const ptype = Selector("#PropertyDetailsViewModel_PropertyTypeId")
const dhouse = Selector('option').withText("Detached house")
const broom = Selector("#PropertyDetailsViewModel_PropertyNumberOfBedroomsPostHomeTradingPilotId_3")
const baroom = Selector("#PropertyDetailsViewModel_PropertyNumberOfBathroomsId_2")
const oroom = Selector("#PropertyDetailsViewModel_PropertyNumberOfOtherRoomsId_2")
const bdate = Selector("#PropertyDetailsViewModel_PropertyConstructionYearId")
const bdate1 = Selector('option').withText("2010 or later")

const bdate3 = Selector("#PropertyDetailsViewModel_IndividualYearBuilt")
const bdate4 = Selector('option').withText("2019")

const ewalls = Selector("#PropertyDetailsViewModel_PropertyBuildingMaterialPostHomeTradingPilotId")
const ewalls1 = Selector('option').withText("Brick")
const roof1 = Selector("#PropertyDetailsViewModel_PropertyRoofMaterialPostHomeTradingPilotId")
const roof2 = Selector('option').withText("Tile")
const rflat1 = Selector("#PropertyDetailsViewModel_PropertyFlatRoofPercentageId")
const rflat2 = Selector('option').withText("None")
const fld = Selector("#PropertyDetailsViewModel_PropertyHasBeenFloodedId_0")
const sub = Selector("#PropertyDetailsViewModel_PropertyHasHadSubsidenceId_0")
const lb = Selector("#PropertyDetailsViewModel_IsListedBuilding_0")

const adult18 = Selector("#PropertyDetailsViewModel_NumberOfAdultsId_2")
const child18 = Selector("#PropertyDetailsViewModel_NumberOfDependantsId_0")
const home1 = Selector("#PropertyDetailsViewModel_PropertyUsageFrequencyId")
const home2 = Selector('option').withText("Most days for at least a few hours")
const bness = Selector("#PropertyDetailsViewModel_PropertyBusinessUseId")
const bness2 = Selector('option').withText("No business use")

const sitems = Selector("#SpecifiedItemsViewModel_HasSpecifiedItems_0")
const pposns = Selector("#PersonalPossessionsViewModel_IsPPCoverSelected_0")
const bcover = Selector("#SpecifiedItemsViewModel_HasBicycles_0")






const iloss = Selector("#ClaimsViewModel_HasClaims_0")
const wclm = Selector("#PolicyholderDetailsViewModel_NumberOfYearsBuildingInsuranceId")
const wlcm2 = Selector('option').withText("10 years")

var propertyContentInsuranceSelect = Selector('#PolicyholderDetailsViewModel_NumberOfYearsContentsInsuranceId');
var propertyContentInsuranceOption = propertyContentInsuranceSelect.find('option');

/*const cins = Selector("#PolicyholderDetailsViewModel_NumberOfYearsContentsInsuranceId")
const cins2 = Selector('option').withText("10 years")*/

const title = Selector("#PolicyholderDetailsViewModel_PolicyholderTitle_1")
const estatus = Selector("#PolicyholderDetailsViewModel_EmploymentStatus")
const estatus2 = Selector('option').withText("Employed full time")

/*const occ1 = Selector("#auto-Occupation")

const occ2 = Selector("#auto-Business")/*



/*.typeText(Selector('#auto-Occupation'), 'Insur', {speed: 0.2})
.wait(2000)
.pressKey('Enter')

.typeText(Selector('#auto-Business'), 'Insur', {speed: 0.2})
.wait(2000)
.pressKey('Enter')*/

const jph = Selector("#JointPolicyholderViewModel_IsAddJointPolicyholderId_0")
const iparty = Selector("#InterestedPartyViewModel_IsThirdPartyInterestNoted_0")
const spayment = Selector("#PolicyholderDetailsViewModel_IsDDMonthlyPaymentPreferred_1")
const gquote = Selector("#submit-your-details")



fixture("BasicTests")
.page("https://customer.axa.co.uk/home/get-quote/");

test("First Test", async t=>{
    await t
    .setTestSpeed(0.4)
    .maximizeWindow()

    .click(cookiebutton)

    .typeText("#HouseNumberOrName", "1 Barley House")
    .typeText("#Postcode", "KT11 1HY" )

    .click(FindAddress)
    .click(own)
    .click(cover)
    .typeText("#CoverStartDateDay", "08")
    .typeText("#CoverStartDateMonth", "12")
    .typeText("#CoverStartDateYear", "2022")
    .click(ptype)
    .click(dhouse)
    .click(broom)
    .click(baroom)
    .click(oroom)

    .click(bdate)
    .click(bdate1)
    .click(bdate3)
    .click(bdate4)


    .click(ewalls)
    .click(ewalls1)
    .click(roof1)
    .click(roof2)
    .click(rflat1)
    .click(rflat2)
    .click(fld)
    .click(sub)
    .click(lb)
    .click(adult18)
    .click(child18)
    .click(home1)
    .click(home2)
    .click(bness)
    .click(bness2)

    .click(sitems)
    .click(pposns)
    .click(bcover)







    .click(iloss)
    .click(wclm)
    .click(wlcm2)

    /*.click(cins)
    .click(cins2)*/

    .click(propertyContentInsuranceSelect)

    .click(propertyContentInsuranceOption.nth(12))

    .click(title)
    .typeText("#PolicyholderDetailsViewModel_PolicyholderFirstName", "Joe")
    .typeText("#PolicyholderDetailsViewModel_PolicyholderSurname", "Black")
    .typeText("#PolicyholderDateOfBirthDay", "10")
    .typeText("#PolicyholderDateOfBirthMonth", "10")
    .typeText("#PolicyholderDateOfBirthYear", "1980")
    .click(estatus)
    .click(estatus2)
    .typeText("#auto-Occupation",("Insur")).pressKey('Enter')

    .typeText("#auto-Business",("Insur")).pressKey('Enter')



    .click(jph)




    .click(iparty)
    .click(spayment)
    .typeText("#PolicyholderDetailsViewModel_PolicyholderEmail", "joe.black@email.com")
    .click(gquote)


})

