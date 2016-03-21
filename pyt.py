a=[1,3,5,2,3,9,1]
left=[]
right=[]
def merge(left,right,a):
	nl = len(left)
	nr = len(right)
	i=j=k=0
	while i<nl and j<nl:
		
		if left[i]<= right[j]:
			a[k] = left[i]
			i = i+1
			k=k+1
		else:
			a[k] = right[j]
			j = j+1
			k=k+1
	while i<nl:
		a[k] =left[i]
		i=i+1
		k=k+1
	while j<nr:
		a[k] = right[j]
		j=j+1
		k=k+1
def mergesort(a):
	
	n = len(a)
	if n<2:
		return
	mid = n/2
	for i in range(mid):
		left.append(a[i])
	for i in range(mid,n,1):
		right.append(a[i])
	mergesort(left)
	mergesort(right)
	merge(left,right,a)

mergesort(a)
print a

