function res=DoSpliceFreq(b3,b4,fl)

mymask1=gaussf((rr(b3,'freq') < fl),1/(20*fl));
mymask2=gaussf((rr(b3,'freq') > fl*1.4),1/(20*fl));

fb3=ft(b3) .* mymask1;  % low pass
fb4=ft(b4) .* mymask2;  % high pass

res=real(ift(fb3+fb4));
