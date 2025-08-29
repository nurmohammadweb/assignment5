
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer-getElementById - একটা নির্দিষ্ট id–এর এলিমেন্ট আনে।
getElementsByClassName - একই ক্লাসের সব এলিমেন্ট লিস্ট আনে।
querySelector - প্রথম ম্যাচ হওয়া এলিমেন্ট আনে।
querySelectorAll  সব ম্যাচ হওয়া এলিমেন্ট লিস্ট আনে।
2. How do you **create and insert a new element into the DOM**?
Answer-নতুন এলিমেন্ট বানাতে document.createElement() ব্যবহার করি, কনটেন্ট বসিয়ে appendChild() বা append() দিয়ে DOM এ যোগ করি।
3. What is **Event Bubbling** and how does it work?
Answer-Event Bubbling মানে ইভেন্ট ভেতরের এলিমেন্ট থেকে ধাপে ধাপে প্যারেন্ট পর্যন্ত উঠে যায়।
4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer-Event Delegation হলো প্যারেন্টে একটাই লিসেনার বসিয়ে event.target দেখে চাইল্ডে ইভেন্ট হ্যান্ডেল করা। এতে কোড ছোট হয় আর পারফরম্যান্স ভালো থাকে।
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer-preventDefault() ব্রাউজারের ডিফল্ট কাজ থামায় (যেমন ফর্ম সাবমিট বন্ধ)। stopPropagation() ইভেন্টকে উপরে/নিচে ছড়ানো বন্ধ করে (বাবলিং থামায়)।
