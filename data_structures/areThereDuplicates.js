function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    var start = 0
    var end = args.length - 1
    while ((start < end) & (start != args.length - 1)){
        if(args[start]===args[end]){
            return true
        }
        else{
            end--;
            if(start==end){
                start++;
                end = args.length - 1
            }
        }
    }
    return false
}
