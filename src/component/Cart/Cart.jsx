

const Cart = ({selectedData, totalCredit, remainingCredit, totalPrice}) => {
    
    
    return (
        <div className="p-3">
             <h3 className="border-b-2 p-4 text-[#2F80ED] text-lg font-bold">
             Credit Hour Remaining {remainingCredit} hr
             </h3>
             <div className="border-b-2 pb-4">
             <h1 className="mt-2 mb-4 text-xl font-bold">
                Course Name 
             </h1>
             
             <ul className="text-base font-normal">
             {
                selectedData.map((course, index) =>  <li key={course.id}> {index + 1} . {course.course_name}</li>)
             }
             </ul>
             </div>
             <p className="border-b-2 pt-3 pb-3 text-base font-semibold">Total Credit Hour : {totalCredit}</p>
             <p className="mt-4 font-bold text-base">Total Price : {totalPrice} USD</p>
        </div>
    );
};

export default Cart;