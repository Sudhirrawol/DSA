var sortArray = function(nums) {

    function mergeSort(i, j, arr) {

        if (i >= j) return;

        let mid = Math.floor((i + j) / 2);

        mergeSort(i, mid, arr);
        mergeSort(mid + 1, j, arr);

        merge(i, mid, j, arr);
    }

    function merge(i, mid, j, arr) {

        let left = i;
        let right = mid + 1;
        let temp = [];

        while (left <= mid && right <= j) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }

        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        while (right <= j) {
            temp.push(arr[right]);
            right++;
        }

        for (let k = 0; k < temp.length; k++) {
            arr[i + k] = temp[k];
        }
    }

    mergeSort(0, nums.length - 1, nums);
    return nums;
};