import { Button } from 'antd';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { IonButton } from '@ionic/react';
import { AppContext } from '../contexts/AppProvider';
import { useContext } from 'react';

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

const StyledWrapper = styled.div`
    .bnt{
        margin-left: 14.75px;
    }
`


const Report = (props) => {
  const { repairId, repair } = props
  const { evaluatesController } = useContext(AppContext)
  const { evaluates } = evaluatesController
  const evaluate = evaluates ? evaluates.find(e => e.repairId === repairId) : null
  const topic1 = evaluates ? evaluate.evaluated[0].topic : ''
  const topic2 = evaluates ? evaluate.evaluated[1].topic : ''
  const topic3 = evaluates ? evaluate.evaluated[2].topic : ''
  const topic4 = evaluates ? evaluate.evaluated[3].topic : ''
  const topic5 = evaluates ? evaluate.evaluated[4].topic : ''
  const score = (sc) => {
    switch (sc) {
      case 1:
        return (
          "แย่มาก"
        )
      case 2:
        return (
          "แย่"
        )
      case 3:
        return (
          "ปานกลาง"
        )
      case 4:
        return (
          "พึงพอใจ"
        )
      case 5:
        return (
          "พึงพอใจมาก"
        )
    }
  }

  const score1 = evaluates ? score(evaluate.evaluated[0].score) : ''
  const score2 = evaluates ? score(evaluate.evaluated[1].score) : ''
  const score3 = evaluates ? score(evaluate.evaluated[2].score) : ''
  const score4 = evaluates ? score(evaluate.evaluated[3].score) : ''
  const score5 = evaluates ? score(evaluate.evaluated[4].score) : ''


  const printPDF = () => {
    var docDefinition = {
      content: [
        { text: 'สรุปรายงานการซ่อม', style: 'header' },
        { text: 'ข้อมูลการแจ้งซ่อม', style: 'title' },
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [100, 300],
            body: [
              ['วันที่แจ้ง', repair.notiDate],
              ['ชื่อผู้แจ้ง', repair.informer],
              ['หน่วยงาน/แผนก', repair.department]
            ]
          }
        },
        { text: 'ข้อมูลการรับซ่อม', style: 'title' },
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [100, 300],
            body: [
              ['วันที่รับซ่อม', repair.repairDate],
              ['วันที่ซ่อมเสร็จ', repair.repairedDate],
              ['ชื่อผู้รับซ่อม', repair.repairer],
            ]
          }
        },

        { text: 'รายละเอียดการซ่อม', style: 'title' },
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [100, 300],
            body: [
              ['อุปกรณ์ที่ซ่อม', repair.device],
              ['รายละเอียดการซ่อม', repair.detail],

            ]
          }
        },

        { text: 'รายละเอียดการประเมิน', style: 'title' },
        { text: `วันที่ประเมินการซ่อม: ${repair.evaluateDate}`, style: 'date' },
        {
          style: 'tableExample',
          table: {
            heights: 20,
            widths: [30, 270, 90],
            body: [
              [{ text: 'ข้อที่', style: 'evalu' }, { text: 'หัวข้อการประเมิน', style: 'evalu' }, { text: 'เกณฑ์การประเมิน', style: 'evalu' }],
              [{ text: '1', style: 'number' }, topic1, { text: `${score1}`, style: 'number' }],
              [{ text: '2', style: 'number' }, topic2, { text: `${score2}`, style: 'number' }],
              [{ text: '3', style: 'number' }, topic3, { text: `${score3}`, style: 'number' }],
              [{ text: '4', style: 'number' }, topic4, { text: `${score4}`, style: 'number' }],
              [{ text: '5', style: 'number' }, topic5, { text: `${score5}`, style: 'number' }],
            ]
          }
        },
        { text: '.............................................', style: 'dot' },
        { text: `( ${repair.informer} )`, style: 'name' },
        { text: 'ผู้แจ้งซ่อม', style: 'name' },
        { text: '.............................................', style: 'dot1' },
        { text: `( ${repair.repairer} )`, style: 'name' },
        { text: 'ช่างซ่อม', style: 'name' },
      ],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 25
        },
        tableHeader: {

          width: 100
        },
        title: {
          fontSize: 16,
          margin: [50, 20, 0, 5],
        },
        evalu: {
          alignment: 'center',
          fontSize: 16
        },
        tableExample: {
          margin: [50, 0, 0, 0]
        },
        dot: {
          margin: [0, 50, 0, 0],
          alignment: 'center',
        },
        dot1: {
          margin: [0, 15, 0, 0],
          alignment: 'center',
        },
        name: {
          alignment: 'center',
          fontSize: 15
        },
        date: {
          margin: [50, 0, 0, 0]
        },
        number: {
          alignment: 'center',
        }

      },


      defaultStyle: {
        font: 'THSarabunNew'
      }
    };
    pdfMake.createPdf(docDefinition).open()
  }
  return (
    <StyledWrapper>
      <IonButton color="primary" expand="block" className="bnt" onClick={printPDF}>ผลประเมิน</IonButton>
    </StyledWrapper>
  )
}

export default Report;