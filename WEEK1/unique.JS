 
// unique no of occurences
//@note: Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

class Solution
{
    public:
    bool isFrequencyUnique(int n, int arr[])
    {
        unordered_map<int,int>mp;
        for(int i =0;i<n;i++)
        {
            mp[arr[i]]++;
            
        }
        vector<int>v;
        for(auto i: mp)
        {
            v.push_back(i.second);
        }
        unordered_map<int,int>mp2;
        for(int i =0;i<v.size();i++)
        {
            mp2[v[i]]++;
            if(mp2[v[i]]>1)
            {
                return 0;
            }
        }
        return 1;
    }
};