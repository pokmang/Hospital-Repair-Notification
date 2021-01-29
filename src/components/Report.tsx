
import { Button } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
    THSarabunNew: {
      normal: 'THSarabunNew.ttf',
      bold: 'THSarabunNew-Bold.ttf',
      italics: 'THSarabunNew-Italic.ttf',
      bolditalics: 'THSarabunNew-BoldItalic.ttf'
    },
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf'
    }
  }

const printPDF =()=>{
        var repairStatus ="16 มกราคม 2564"
        var date ="1 มกราคม 2564"
        var name1 ="อุสมาน สุหลง"
        var name2 ="ซอฟฟี ยะโกะ"
        var name3 ="ผู้ป่วยใน"
        var name4 ="หน้าจอ"
        var name5 ="แตก ไฟไม่ติด"

        const stl = {
          bold: true,
          alignment: 'right',
        }

    var docDefinition = {
      content: [
        { text: 'สรุปรายงานการซ่อม', style: 'header' },
        { text: 'ข้อมูลการแจ้งซ่อม', style: 'title'},
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [100, 300],
            body: [
              ['วันที่แจ้ง', 'column B'],
              ['ชื่อผู้แจ้ง', 'column B'],
              ['หน่วยงาน/แผนก', 'column B']
            ]
          }
        },
        { text: 'ข้อมูลการรับซ่อม',  style: 'title' },
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [100, 300],
            body: [
              ['วันที่รับซ่อม', 'column B'],
              ['วันที่ซ่อมเสร็จ', 'column B'],
              ['ชื่อผู้รับซ่อม', 'column B'],
            ]
          }
        },

        { text: 'รายละเอียดการซ่อม',  style: 'title' },
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [100, 300],
            body: [
              ['อุปกรณ์ที่ซ่อม', {text: 'Header 1'}],
              ['รายละเอียดการซ่อม', 'column B'],
       
            ]
          }
        },

        { text: 'รายละเอียดการประเมิน',  style: 'title' },
        {text: `วันที่ประเมินการซ่อม: ${date}`,style: 'date'},
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [30, 270,90],
            body: [
              [{text: 'ข้อที่' ,style: 'evalu'}, {text: 'หัวข้อการประเมิน',style: 'evalu'},{text: 'เกณฑ์การประเมิน',style: 'evalu'}],
              [{text: '1' ,style: 'number'}, 'column B',{text: 'ดี' ,style: 'number'}],
              [{text: '2' ,style: 'number'}, 'column B',{text: 'ดีมาก' ,style: 'number'}],
              [{text: '3' ,style: 'number'}, 'column B',{text: 'พอใช้' ,style: 'number'}],
              [{text: '4' ,style: 'number'}, 'column B',{text: 'แย่' ,style: 'number'}],
              [{text: '5' ,style: 'number'}, 'column B',{text: 'ดีมาก' ,style: 'number'}],
            ]
          }
        },
        { text: '.............................................',  style: 'dot' },
        { text: '( อุสมาน  สุหลง )',  style: 'name' },
        { text: 'ผู้แจ้งซ่อม',  style: 'name' },
        { text: '.............................................',  style: 'dot1' },
        { text: '( หมัดซอฟฟี ยะโกะ )',  style: 'name' },
        { text: 'ช่างซ่อม',  style: 'name' },
      ],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 25
        },
        tableHeader:{
         
          width: 100
        },
        title:{
          fontSize: 16,
          margin: [50, 20, 0, 5],
        },
        evalu:{
          alignment: 'center',
          fontSize: 16
        },
        tableExample: {
          margin: [50, 0, 0, 0]
        },
        dot:{
          margin: [0, 50, 0, 0],
          alignment: 'center', 
        },
        dot1:{
          margin: [0, 15, 0, 0],
          alignment: 'center', 
        },
        name:{
          alignment: 'center',
          fontSize: 15
        },
        date:{
          margin: [50, 0, 0, 0]
        },
        number:{
          alignment: 'center',
        }
      
      },
      

      defaultStyle:{
          font: 'THSarabunNew'
      }
    };
    pdfMake.createPdf(docDefinition).open()

  
  }
;
const StyledWrapper = styled.div`
    .bnt{
        margin-left: 14.75px;
    }
`


const Report = () => {
    return (  
           <StyledWrapper>
               <Button className="bnt" onClick={printPDF}>ดาวน์โหลด</Button>
           </StyledWrapper>
    )
}

export default Report
