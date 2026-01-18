import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from "docx";

import { getUnitNameById } from "./getUnitNameById";
import units from "../data/units.json";

import type { recordFieldType } from "../types/recordFieldType";

export const downloadReport = (
  e: React.MouseEvent<HTMLButtonElement>,
  docData: {
    records: recordFieldType[];
    month: string;
    year: string;
    unitId: number | undefined;
    appreciation: string;
    challenges: string;
    testimonies: string;
    prayerRequest: string;
    conclusion: string;
    signature: string;
    reportId: string | null | undefined;
  }
) => {
  e.preventDefault();

  console.log("document data: ", docData);

  const unitName = getUnitNameById(units, docData.unitId as number);

  const testimonyList = docData.testimonies
    .split("\n\n\n\n")
    .filter((el) => el !== "");
  const challengeList = docData.challenges
    .split("\n\n\n\n")
    .filter((el) => el !== "");
  const prayerRequestList = docData.prayerRequest
    .split("\n\n\n\n")
    .filter((el) => el !== "");

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Times New Roman",
            size: 24,
          },
        },
        heading1: {
          run: {
            color: "000000",
            bold: true,
            size: 30,
          },
        },
      },
    },
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `Nigeria Christian Corper's Fellowship (NCCF) Nkanu West Local Government Area, Enugu State ${unitName} Report For The Month Of ${docData.month.toUpperCase()}, ${
                  docData.year
                }.`,
                allCaps: true,
              }),
            ],
            alignment: AlignmentType.CENTER,
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "APPRECIATION",
                bold: true,
                break: 2,
              }),
              new TextRun({
                text: docData.appreciation,
                break: 1,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `ACTIVITIES CARRIED OUT IN THE MONTH OF ${docData.month}`,
                bold: true,
                allCaps: true,
                break: 2,
              }),
            ],
          }),

          // ####################### TABLE HERE #######################
          new Table({
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                height: {
                  value: 500,
                  rule: "atLeast",
                },
                children: Object.entries(docData.records[0] ?? {}).map(
                  ([key, _value]) =>
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: key,
                              bold: true,
                              allCaps: true,
                            }),
                          ],
                        }),
                      ],
                      margins: { top: 100, bottom: 100, left: 100, right: 100 },
                    })
                ),
              }),
              ...docData.records.map(
                (record) =>
                  new TableRow({
                    height: {
                      value: 500,
                      rule: "atLeast",
                    },
                    children: Object.entries(record ?? {}).map(
                      ([_key, value]) =>
                        new TableCell({
                          children: [new Paragraph(String(value))],
                          margins: {
                            top: 100,
                            bottom: 100,
                            left: 100,
                            right: 100,
                          },
                        })
                    ),
                  })
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "TESTIMONIES",
                bold: true,
                break: 2,
              }),
            ],
          }),

          ...testimonyList.map(
            (testimony) =>
              new Paragraph({
                text: testimony.trim(),
                bullet: { level: 0 },
              })
          ),

          new Paragraph({
            children: [
              new TextRun({
                text: "CHALLENGES",
                bold: true,
                break: 2,
              }),
            ],
          }),

          ...challengeList.map(
            (challenge) =>
              new Paragraph({
                text: challenge.trim(),
                bullet: { level: 0 },
              })
          ),

          new Paragraph({
            children: [
              new TextRun({
                text: "PRAYER REQUEST",
                bold: true,
                break: 2,
              }),
            ],
          }),

          ...prayerRequestList.map(
            (prayerRequest) =>
              new Paragraph({
                text: prayerRequest.trim(),
                bullet: { level: 0 },
              })
          ),

          new Paragraph({
            children: [
              new TextRun({
                text: "CONCLUSION",
                bold: true,
                break: 2,
              }),
              new TextRun({
                text: docData.conclusion,
                break: 1,
              }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "SIGNED BY",
                bold: true,
                break: 2,
              }),
              new TextRun({
                text: docData.signature,
                break: 1,
              }),
            ],
            alignment: AlignmentType.RIGHT,
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "NCCF Document.docx";
    link.click();
    URL.revokeObjectURL(url);
  });
};
