## Name :  Course Registration ##
# Live Link : https://vocal-monstera-a370ec.netlify.app
**Project features**
* The purpose of your website is to provide education, and that includes online learning.
* A course can be taken only once. If it is pressed more than shown a twister alert.
* per-course credit system, one student only takes 20 credits. (An alert toaster will be shown if a student wants to take more courses after taking twenty credits.)
* The card section will show how much total money  buying for the course. How many credits are courses buying? How many more credits can you take? Which course is buying its title.
 



**Discussing and managed the state in my assignment**

* const [data, setData] = useState([]) 
initially set the value empty array. api all data set setData and all card every data load dynamically.

* const [selectedData, setSelectedData] = useState([])
initially set the value empty array. Clicking on select button will pass the data of the card, it will be deposited here in setselectdata, and will give the title, credit, price of the selected card. We will show the title of the selected card in the cart section. Total Price and Total Credit claculation with selectedData forEach.

* const [totalCredit , setTotalCredit] = useState(0)
initially set the value 0.  Credits for each course are added each time set setTotalCredit. The total credit is displayed by passing the data to the cart section totalCredit .


* const [remainingCredit, setRemainingCredit] = useState(20)
initially set the value to 20 because 20 credits is limits .We will always subtract the total selected credits from the remainingCredit, deposit the subtraction into the setsetRemainingCredit and display the remainingCredit . remainingCredit will never drop below 0 .

* const [totalPrice , setTotalPrice] = useState(0)
SetTotalPrice will store the price of each of the selected courses. And After passing the data TotalPrice will be displayed in the card section 
  
