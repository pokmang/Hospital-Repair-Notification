
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
        {text: `วันที่ประเมินการซ่อม: ${date}`},
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [100, 300],
            body: [
              ['ข้อ1', {text: 'Header 1'}],
              ['ข้อ2', 'column B'],
              ['ข้อ3', 'column B'],
              ['ข้อ4', 'column B'],
              ['ข้อ5', 'column B'],
            ]
          }
        },

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
          margin: [0, 20, 0, 5],
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
