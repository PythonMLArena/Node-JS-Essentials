// 1. Flow starts from client(browser) it request the nodejs server  
// 2. There is event queue in nodejs it went to event queue
// 3. There is event loop ( who monitor the event queue) , it pull request (based on FIFO mechanism )
// 4. The request can be blocking operation ( sync task) and non blocking operation ( Async task )
// 5. if non blocking operation:
//     then it will process and send response to user
// 6. if blocking operation:
//     1. it went to threads Pool ( therad is worker(bydefault there are 4 only(cpu core  == threads)) ) it fultil blocking operation request
//     2. Thrads are limited and if threads available then it will assign blocking operation and then return response and again went to threads Pool 
//     3. else user will wait

// Always have non blocking operation in the code 
