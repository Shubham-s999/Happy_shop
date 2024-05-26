function f1(i,n,r,q,p) {
	var v1,v2,v3,v4,v5;
		
	if (count==1) {
		v1="n1"
		v2="i1"
		v3="r1"
		v4="d1"
		v5="q1"
		v6="p1"
	}
	else if (count==2) {
		v1="n2"
		v2="i2"
		v3="r2"
		v4="d2"
		v5="q2"
		v6="p2"
	}
	else if (count==3) {
		v1="n3"
		v2="i3"
		v3="r3"
		v4="d3"
		v5="q3"
		v6="p3"
	}
	else if (count==4) {
		v1="n4"
		v2="i4"
		v3="r4"
		v4="d4"
		v5="q4"
		v6="p4"
	}
	else if (count==5) {
		v1="n5"
		v2="i5"
		v3="r5"
		v4="d5"
		v5="q5"
		v6="p5"
	}
	else if (count==6) {
		v1="n6"
		v2="i6"
		v3="r6"
		v4="d6"
		v5="q6"
		v6="p6"
	}

	document.getElementById(v1).innerHTML=n;
	document.getElementById(v2).src=i;
	document.getElementById(v3).innerHTML="Rating : "+r;
	document.getElementById(v4).innerHTML="$"+p;
	document.getElementById(v5).innerHTML=q;
	document.getElementById(v6).innerHTML="$"+p;
}