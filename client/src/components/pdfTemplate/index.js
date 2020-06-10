import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
//import { connect } from "react-redux";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = props => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>
          This is to notify that the bearer of this card {props.name} is
          interested in joining your hostel. We kindly request the hostel
          authority to provide with the information as required by the bearer of
          this card. We also request the hostel authority to provide the
          discount of Rs. XXXX on the aformentioned fee as per agreement. We
          wish for your comfortable time at hostel. Thank you!
        </Text>
      </View>
      <View style={styles.section}>
        <Text>For further information, contact: hostel@hostel.com</Text>
      </View>
    </Page>
  </Document>
);

//const mapStateToProps = state => ({
 // hostels: state.retriever,
 // loading: state.retriever.loading
//});

export default MyDocument;
