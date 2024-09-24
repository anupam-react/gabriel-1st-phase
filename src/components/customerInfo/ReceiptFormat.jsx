import React, { useRef } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { formatTime2, getDateFromISOString } from '../../utiils';

// Define styles

const styles = StyleSheet.create({
    page: {
      // padding: 30,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "left",
    },
    section: {
      marginBottom: 10,
    },
    header: {
      fontSize: 20,
      textAlign: "center",
      marginBottom: 20,
    },
    text: {
      fontSize: 12,
    },
    bold: {
      fontWeight: "bold",
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    image1: {
      width: 200,
      height: 50,
    },

    footer: {
      marginTop: 20,
      textAlign: "center",
    },
    thank: {
      textAlign: "center",
      marginBottom: 20,
    },
  });

  // Create Document Component
  const ReceiptFormat = ({userData,
    brandData,
    data}) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.image} src={brandData?.image}></Image>
          <Text>{brandData?.name}</Text>
        </View>
        <View>
          <View style={styles.section}>
            <Text style={styles.text}>
              Address: {brandData?.firstLineAddress}
            </Text>
            <Text style={styles.text}>Contact : {brandData?.phone}</Text>
            <Text style={styles.text}>Receipt No: {data?._id}</Text>
            <Text style={styles.text}>
              Date & Time:{" "}
              {data?.dateUploaded ||
                getDateFromISOString(data?.createdAt) +
                  " , " +
                  formatTime2(data?.createdAt)}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>
              Name:{" "}
              {userData?.fullName ||
                userData?.firstName + " " + userData?.lastName}
            </Text>
            <Text style={styles.text}>Items: {data?.productId?.name}</Text>
            <Text style={styles.text}>
              Price: £{data?.price} * {data?.quantity}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>Total: £{data?.total}</Text>
            <Text style={styles.text}>Discount: £{data?.offerDiscount}</Text>
            <Text style={styles.text}>VAT(Registration No): 123456</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>Rewards Points Earned: 01</Text>
            <Text style={styles.text}>Rewards Stamps Earned: 01</Text>
            <Text style={styles.text}>Payment Method: Linked Card</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.thank}>Thank you!</Text>
          <Image style={styles.image1} src="../Frame 38456.png"></Image>
        </View>
      </Page>
    </Document>
  );

// const App = () => {
//   const pdfRef = useRef();

//   const handleDownload = async () => {
//     const blob = await pdf(<MyDocument />).toBlob();
//     saveAs(blob, 'receipt.pdf');
//   };

//   return (
//     <div>
//       <PDFDownloadLink document={<MyDocument />} fileName="receipt.pdf">
//         {({ blob, url, loading, error }) =>
//           loading ? 'Loading document...' : 'Download PDF'
//         }
//       </PDFDownloadLink>
//       <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
//         Save PDF
//       </button>
//     </div>
//   );
// };

export default ReceiptFormat;
