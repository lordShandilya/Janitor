
# Application Flow

1. who will use the app-> faculty, student, staff

2. Faculty details at the time of register:->
	1. which department they teach
	2. Name
	3. phone no.
	4. email_id
	5. Something to verify even the identity of the faculty or authenticity __?

3. Student details at the time of register:->
	1. current hostel
	2. current room number
	3. roll  no.
	4. name
	5. active phone no. (along with phone verification)
	6. college_email-id (along with email verification)

4. Staff details at the time of register :->
	1. name
	2. (any other details --help-needed--) __?
	3.

5. There will be four kind of tables-> dashboard (--suggestions--over--name __?) ,faculty, staff, student, leaves (hostel leaves), previous_records (records of all the check-in and out upto a week or two)

6. Dashboard for the Admin:->
	1. will have the data of all the check-out as rows
	2. It will dynamic in nature as the person check-in after being check-out the row will disappear from the dashboard(table) and hence from the dashboard
	3. Admin got a "refresh" button which hep him to see the most updated "dashboard" table after several check-ins and check-outs
	4. Admin got a "show info" button which will fetch the infrmations of the checked-out a_id's like name, rooll number, phone numnber, hostel name, room number, but admih has to enter the password.
	5. The Admin has to collect the data file of previous_records with four days of the limited time for which we he will get a mail from the app to collect th data and after the fourth day the previous_records will be cleared.


7. Leave taking from the student when they are going to home or somewhere else for more than a day
	1. They have to fill a form and submit it.
	2. After submission the caretaker will get the notification
	3. The leave data of the student will be stored in the "leaves" table (-- is there any need of storing the previous leaves data? __?)

8. Login ;->
	1. phone number (need some data which should be common in all the table and they are email, phone number, a_id))
	2. password
	3. "Forgot password" we will send a form link on the registered email id to fill and change the password



# Some more questions
1. Is there any need of in-app notifications, if yes then what are they?
	1. For the admin to collect the previous_records.
	2. For the caretaker to notify which student has left the hostel
2.
