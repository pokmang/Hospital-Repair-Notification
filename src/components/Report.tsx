
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
    var docDefinition = {
      content: [
        { text: 'สรุปรายงานการซ่อม', fontSize: 25  },
        { text: `วันที่แจ้งซ่อม ${repairStatus}`, fontSize: 15 },
        { text: `วันที่ซ่อมเสร็จ ${date}`, fontSize: 15 },
        { text: `วันที่ประเมินการซ่อม ${date}`, fontSize: 15 },
        { text: `ผู้แจ้งซ่อม ${name1}`, fontSize: 15 },
        { text: `ผู้รับซ่อม ${name2}`, fontSize: 15 },
        { text: `แผนก ${name3}`, fontSize: 15 },
        { text: `อุปกรณ์ที่ซ่อม ${name4}`, fontSize: 15 },
        { text: `รายละเอียดการซ่อม ${name5}`, fontSize: 15 },

      ],

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
