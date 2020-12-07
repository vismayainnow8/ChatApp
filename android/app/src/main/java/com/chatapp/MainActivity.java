package com.chatapp;
import com.google.firebase.database.DatabaseReference;

import com.facebook.react.ReactActivity;
import com.google.firebase.database.FirebaseDatabase;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    // Write a message to the database
FirebaseDatabase database = FirebaseDatabase.getInstance();
// DatabaseReference myRef = database.getReference("message");

// myRef.setValue("Hello, World!");
    return "ChatApp";
  }
}
