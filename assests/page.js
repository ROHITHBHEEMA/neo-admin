import {RiHospitalLine} from 'react-icons/ri'
import  {FaFileInvoiceDollar} from 'react-icons/fa'
import {FaFilePrescription} from 'react-icons/fa'
import {FaCartPlus} from  'react-icons/fa'
import {RiChatNewFill} from  'react-icons/ri'
import {FaExchangeAlt} from 'react-icons/fa'

export const expire_options = [
    {
        value: "4",
        label: "4 Hours"
    },
    {
        value: "12",
        label: "12 Hours"
    },
    {
        value: "24",
        label: "24 Hours"
    },
    {
        value: "48",
        label: "48 hours"
    }
]

export const payment_options = [
    {
        value: 25,
        label: "25%"
    },
    {
        value: 50,
        label: "50%"
    },
    {
        value: 75,
        label: "75%"
    },
    {
        value: -1,
        label: "Full Payment"
    },
    {
        value: -2,
        label: "Custom"
    }
]


export const PAGE_DETAILS = {
    ASSISTED_SALES: {
        title:"ASSISTED_SALES",
        heading: "Assisted Sales",
        color: "#9400d3",
        homepagedisplay:true,
        icon:< FaExchangeAlt className={'person'} />,
        navicon:<FaExchangeAlt style={{width:'40px',height:'40px',paddingRight:'15px',color:"#67008f"}} />,
        link: "/assisted-sale"
    },
    INVOICING:{
        title: "INVOICING",
        heading: "Invoicing",
        color: "#4b0082",
        homepagedisplay:true,
        icon:<FaFileInvoiceDollar className={'person'} />,
        navicon:<FaFileInvoiceDollar style={{width:'35px',height:'35px',paddingRight:'15px',color:"#420272"}} />,
        link: "/invoice"
    },
    PRESCRIPTION:{
        title:"PRESCRIPTION",
        heading: "Prescription",
        color: "#000096",
        homepagedisplay:true,
        icon:<FaFilePrescription className={'person'} />,
        navicon:<FaFilePrescription style={{width:'35px',height:'35px',paddingRight:'15px',color:"#00007c"}} />,
        link: "/prescription"
    },
    ORDERS:{
        title:"ORDERS",
        heading: "Orders",
        color: "#004300",
        permissions:['is_superuser','is_staff'],
        homepagedisplay:true,
        icon:<FaCartPlus className={'person'} />,
        navicon:<FaCartPlus style={{width:'40px',height:'40px',paddingRight:'15px',color:"#025b02"}} />,
        link: "/orders"
    },
    CONSULTATION:{
        title:"CONSULTATION",
        heading: "Consultation",
        color: "#797900",
        homepagedisplay:true,
        icon:<RiHospitalLine className={'person'} />,
        navicon:<RiHospitalLine style={{width:'40px',height:'40px',paddingRight:'15px',color:"#4c4c00"}} />,
        link: "/consultation"
    },
    CREATE_CONSULTATION_SOLT:{
        title:"CREATE_CONSULTATION_SOLT",
        heading: "Create Consultation Slot",
        color: "#FF7F00",
        homepagedisplay:true,
        icon:<RiChatNewFill className={'person'} />,
        navicon:<RiChatNewFill style={{width:'40px',height:'40px',paddingRight:'15px',color:"#b15600"}} />,
        link: "/consultation/new"
    }

}